import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/core/appointments/appointment.model';
import { AppointmentService } from 'src/app/core/appointments/appointments.service';


import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent implements OnInit {
  loading = true;
  quote?: Appointment;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointment: AppointmentService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.router.navigate(['/admin']);
      return;
    }

    this.appointment.getAppointmentById(id).subscribe({
      next: (q: Appointment) => {
        this.quote = q;
        this.loading = false;
      },
      error: () => {
        this.router.navigate(['/admin']);
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
