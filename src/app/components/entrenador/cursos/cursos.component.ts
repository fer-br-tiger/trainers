import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CursosService } from 'src/app/services/cursos.service';

export interface Curso {
  nombre: string;
  descripcion: string;
  publico_destinado: string;
  requisitos: string;
  url_imagen_presentacion: string;
  url_video_presentacion: string;
  precio_inscripcion: number;
  precio_cuota: number;
  cantidad_cuotas: number;
  id_subrubros: number;
}

interface Rubro {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'publico_destinado', 'requisitos', 'precio_inscripcion', 'precio_cuota', 'cantidad_cuotas'];
  dataSource: Curso[] = [];
  cursoForm!: FormGroup;

  @ViewChild(MatTable) tabla!: MatTable<any>;

  constructor(private cursosService: CursosService, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cursoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      publico_destinado: ['', [Validators.required]],
      requisitos: ['', [Validators.required]],
      url_imagen_presentacion: ['', [Validators.required]],
      url_video_presentacion: ['', [Validators.required]],
      precio_inscripcion: ['', [Validators.required]],
      precio_cuota: ['', [Validators.required]],
      cantidad_cuotas: ['', [Validators.required]],
      subrubro: ['']
    });

    try {
      this.cursosService.getCursos().subscribe(resp => {
        this.dataSource = resp.rows;
      });
    } catch {
      console.log('');
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContent, { data: this.cursoForm });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        let curso = {
          nombre: this.cursoForm.get('nombre')?.value,
          descripcion: this.cursoForm.get('descripcion')?.value,
          publico_destinado: this.cursoForm.get('publico_destinado')?.value,
          requisitos: this.cursoForm.get('requisitos')?.value,
          url_imagen_presentacion: this.cursoForm.get('url_imagen_presentacion')?.value,
          url_video_presentacion: this.cursoForm.get('url_video_presentacion')?.value,
          precio_inscripcion: this.cursoForm.get('precio_inscripcion')?.value,
          precio_cuota: this.cursoForm.get('precio_cuota')?.value,
          cantidad_cuotas: this.cursoForm.get('cantidad_cuotas')?.value,
          id_subrubros: this.cursoForm.get('subrubro')?.value
        };
        this.cursosService.postCursos(curso).subscribe(resp => {
          console.log(resp);
        })
        this.dataSource.push(curso);
        this.tabla.renderRows();
        this.cursoForm.reset();
      }
    });
  }
}

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html'
})
export class DialogContent {
  rubros: Rubro[] = [
    { value: 1, viewValue: 'Futbol' },
    { value: 2, viewValue: 'Basquet' },
    { value: 3, viewValue: 'Natacion' },
    { value: 4, viewValue: 'Hockey' },
    { value: 5, viewValue: 'Running' }
  ];
  selected: number = this.rubros[0].value;

  constructor(public dialogRef: MatDialogRef<DialogContent>, @Inject(MAT_DIALOG_DATA) public cursoForm: FormGroup) { }

  isValid() {
    if(this.cursoForm.valid) this.dialogRef.close(this.cursoForm.valid);
  }
}
