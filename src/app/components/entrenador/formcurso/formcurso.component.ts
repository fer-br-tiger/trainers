import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const ELEMENT_RUBRO = [
  { value: 1, viewValue: 'Futbol' },
  { value: 2, viewValue: 'Basquet' },
  { value: 3, viewValue: 'Natacion' },
  { value: 4, viewValue: 'Hockey' },
  { value: 5, viewValue: 'Running' }
];

@Component({
  selector: 'app-formcurso',
  templateUrl: './formcurso.component.html',
  styleUrls: ['./formcurso.component.scss']
})
export class FormcursoComponent implements OnInit {
  rubros = ELEMENT_RUBRO;
  
  selected: number = this.rubros[0].value;

  constructor(public dialogRef: MatDialogRef<FormcursoComponent>, @Inject(MAT_DIALOG_DATA) public cursoForm: FormGroup) { }

  isValid() {
    if(this.cursoForm.valid) this.dialogRef.close(this.cursoForm.valid);
  }

  ngOnInit(): void {
  }

}
