import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Appointment } from 'src/app/core/appointments/appointment.model';
import { AppointmentService } from 'src/app/core/appointments/appointments.service';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements AfterViewInit {
  loading = false;

  displayedColumns: string[] = [
    'appointmentAt',
    'customerName',
    'petName',
    'customerPhone',
    'appointmentType',
    'actions',
  ];

  dataSource = new MatTableDataSource<Appointment>([]);

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private appointment: AppointmentService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private auth: AuthService,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    if (this.sort) {
      this.dataSource.sort = this.sort;

      // para que appointmentAt (string) se ordene como fecha
      this.dataSource.sortingDataAccessor = (item, property) => {
        if (property === 'appointmentAt') return new Date(item.appointmentAt).getTime();
        return (item as any)[property];
      };
    }

    // carga inicial automática
    this.load();
  }

  load(): void {
    this.loading = true;

    this.appointment.listAppointments().subscribe({
      next: (rows: Appointment[]) => {
        
        this.dataSource.data = rows ?? [];

        // aplicar sort por defecto appointmentAt asc 
        if (this.sort) {
          const s: Sort = { active: 'appointmentAt', direction: 'asc' };
          this.sort.active = s.active;
          this.sort.direction = s.direction;
          this.sort.sortChange.emit(s);
        }

        if (this.paginator) this.paginator.firstPage();
        this.loading = false;
      },
      error: () => {
        this.snack.open('No se pudieron cargar las cotizaciones', 'OK', { duration: 2000 });
        this.dataSource.data = [];
        this.loading = false;
      },
    });
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.paginator) this.paginator.firstPage();
  }

  openDeleteModal(row: Appointment): void {
    const ref = this.dialog.open(ConfirmModalComponent, {
      width: '360px',
      data: {
        title: 'Eliminar cita',
        message: `Cliente: ${row.customerName} a las ${new Date(row.appointmentAt).toLocaleString()}`,
        confirmText: 'Sí, eliminar',
        cancelText: 'No',
      },
    });

    ref.afterClosed().subscribe((ok: boolean) => {
      if (!ok) return;

      this.appointment.deleteById(row.id).subscribe({
        next: () => {
          this.dataSource.data = this.dataSource.data.filter((x) => x.id !== row.id);
          this.snack.open('Cita eliminada de la agenda', 'OK', { duration: 1500 });
        },
        error: () => {
          this.snack.open('Error al eliminar la cita', 'OK', { duration: 1500 });
        },
      });
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
