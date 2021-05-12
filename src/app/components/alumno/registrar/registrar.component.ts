import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  dni = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un email';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

  getErrorName() {
    if (this.name.hasError('required')) {
      return 'Debe ingresar su nombre';
    }

    return '';
  }

  getErrorLastName() {
    if (this.lastName.hasError('required')) {
      return 'Debe ingresar su apellido';
    }

    return '';
  }

  getErrorDNI() {
    if (this.dni.hasError('required')) {
      return 'Debe ingresar su DNI';
    }

    return this.dni.hasError('minlength') ? 'El DNI debe contener 8 caracteres' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
