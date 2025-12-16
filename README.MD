# 🐾 Proyecto: Veterinaria Patitas

Este repositorio documenta el proceso de diseño y construcción de una web app para una veterinaria, enfocada en una landing de negocio, un sistema de agenda de citas y un panel de gestión para administración.

La aplicación fue desarrollada como un MVP funcional, priorizando el flujo completo del usuario y la simulación de un entorno real, utilizando Angular 16 en el frontend y Spring Boot 17 en el backend, consumiendo servicios REST simulados.

---

## 🧠 Razonamiento y enfoque

Tras analizar el requerimiento, el primer paso fue definir los flujos principales y los tipos de usuario que interactúan con la plataforma.

Se identificaron dos roles principales:

- **Usuario**: persona que desea solicitar un servicio veterinario.
- **Administrador**: encargado de gestionar las citas y la agenda del negocio.

El objetivo fue cubrir el ciclo completo:
solicitud de cita → gestión → visualización → eliminación.

---

## 🌐 Frontend – Experiencia de Usuario

### 1️⃣ Landing de negocio

La aplicación inicia con una landing page informativa, diseñada para presentar el negocio de forma clara y accesible.

La landing se compone de:

- Header con el nombre de la veterinaria y un botón principal CTA (Call To Action) para agendar un servicio.
- Grid de tarjetas con una breve descripción de los servicios ofrecidos.
- Sección de especialistas a cargo.
- Footer informativo.

Esta vista fue construida utilizando HTML semántico, CSS puro y el sistema de filas y columnas (`row` / `col`) de Bootstrap, sin librerías de UI adicionales en esta sección.

---

### 2️⃣ Solicitud de cita (Formulario)

Desde la landing, el usuario puede abrir un modal que contiene el formulario para solicitar una cita.

El formulario fue construido con **Angular Reactive Forms** y contiene los siguientes campos:

- Nombre del cliente  
- Nombre de la mascota  
- Teléfono  
- Tipo de servicio  
- Fecha y hora de la cita  
- Comentario adicional (opcional)  

Aunque el teléfono no estaba explícito en los requerimientos, se añadió al detectar que es un dato necesario en un flujo real.

#### Validaciones del formulario

- Todos los campos son obligatorios excepto el comentario.
- Nombre del cliente:
  - mínimo 4 caracteres
  - solo letras
- Nombre de la mascota:
  - mínimo 3 caracteres
  - solo letras
- Teléfono:
  - solo números
  - exactamente 10 dígitos
- Tipo de servicio: obligatorio
- Fecha y hora: obligatoria

El selector de fecha y hora se implementó usando **PrimeNG Calendar**, permitiendo seleccionar ambos valores en una sola interacción.

Durante la interacción, el usuario recibe feedback visual inmediato y, al enviar el formulario, recibe un mensaje de éxito o error según la respuesta del backend.

---

### 3️⃣ Comunicación con el backend

Al enviar el formulario, los datos se envían a un servicio REST en Spring Boot, donde se persisten en memoria (almacenamiento simulado).

Con esto, el flujo del rol Usuario queda completamente cubierto.

---

## 🔐 Autenticación y rol Administrador

Para la gestión de citas se implementó un flujo de login básico con el objetivo de simular un escenario real donde solo personal autorizado puede acceder a la agenda.

- **Endpoint**: `POST /api/auth/login`
- **Credenciales hardcodeadas (MVP)**:
  - Usuario: `admin`
  - Contraseña: `123`

El backend devuelve un token falso que se guarda en `localStorage`.

En el frontend se utilizan **AuthGuards de Angular** para proteger las rutas administrativas y evitar que un usuario logueado vuelva a la vista de login.

---

## 📋 Panel de Administración (CRM simulado)

Al iniciar sesión, el administrador es redirigido a la ruta `/admin`.

Aquí se simula un CRM de agenda con un menú lateral y una vista principal de citas.

### Estado vacío

Si no existen citas registradas, se muestra un placeholder informativo indicando que no hay citas agendadas, evitando confusión con errores de carga.

### Tabla de citas

Cuando existen registros, se muestra una tabla construida con **Angular Material**, que incluye:

- Fecha y hora de la cita
- Nombre del cliente
- Nombre de la mascota
- Teléfono
- Servicio agendado (mostrado con etiquetas visuales por tipo)
- Acciones

Funcionalidades incluidas:

- Paginación (5 registros por vista)
- Buscador simple (cliente, mascota o teléfono)
- Ordenamiento por fecha

Las citas se listan de forma cronológica, mostrando primero la cita más próxima y continuando con las siguientes según su fecha y hora.

---

### Acciones disponibles

#### 🔍 Ver detalle de cita
- Navegación a `/admin/appointments/:id`
- Vista individual con todos los datos de la cita
- Pensada para escalar en el futuro (historial, facturación, etc.)

#### 🗑️ Eliminar cita
- Botón de acción con **Confirm Dialog** de Angular Material
- Confirmación antes de eliminar
- Feedback visual con **SnackBar** indicando éxito o fallo

#### 🚪 Logout
Desde el menú lateral, el administrador puede cerrar sesión, limpiando el token y redirigiendo al login.

---

## ⚙️ Backend – Spring Boot (MVP)

El backend fue construido con el objetivo de simular un entorno real, manteniendo un alcance MVP.

### Endpoints implementados

- `POST /api/auth/login`  
  Simula autenticación y devuelve un token falso.

- `POST /api/appointments`  
  Crea una nueva cita.

- `GET /api/appointments`  
  Obtiene todas las citas.

- `GET /api/appointments/{id}`  
  Obtiene el detalle de una cita.

- `DELETE /api/appointments/{id}`  
  Elimina una cita.

La persistencia se realiza en memoria y se reinicia al reiniciar el servidor.

---

## 🛠️ Tecnologías utilizadas

### Frontend
- Angular 16
- TypeScript
- Angular Material
- PrimeNG (Calendar)
- Bootstrap
- SCSS
- RxJS

### Backend
- Java 17
- Spring Boot
- Spring Web
- REST API
- Almacenamiento en memoria

---

## ▶️ Instalación y ejecución local

### Requisitos
- Node.js 18+
- Angular CLI
- Java 17
- Maven

### Backend
```bash
cd backend
mvn spring-boot:run

### Frontend
```bash
cd frontend
npm install
ng serve --proxy-config proxy.conf.json



