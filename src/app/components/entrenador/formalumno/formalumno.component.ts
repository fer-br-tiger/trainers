import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formalumno',
  templateUrl: './formalumno.component.html',
  styleUrls: ['./formalumno.component.scss']
})
export class FormalumnoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormalumnoComponent>, @Inject(MAT_DIALOG_DATA) public alumnoForm: FormGroup) { }

  ngOnInit(): void {
  }

  isValid() {
    if (this.alumnoForm.valid) this.dialogRef.close(this.alumnoForm.valid);
  }

  getErrorMail(): string {
    if (this.alumnoForm.controls.mail.hasError('required')) {
      return 'Este campo es obligatorio';
    }

    return (this.alumnoForm.controls.mail.hasError('email'))? 'Correo inválido' : '';
  }

  getErrorDNI() {
    if (this.alumnoForm.controls.dni.hasError('required')) {
      return 'Este campo es obligatorio';
    }

    return this.alumnoForm.controls.dni.hasError('minlength') ? 'El DNI debe contener 8 caracteres' : '';
  }

}
