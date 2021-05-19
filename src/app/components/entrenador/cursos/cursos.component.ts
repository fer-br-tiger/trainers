import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from 'src/app/services/cursos.service';
import { FormcursoComponent } from '../formcurso/formcurso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'publico_destinado', 'requisitos', 'precio_inscripcion', 'precio_cuota', 'cantidad_cuotas'];
  dataSource = new MatTableDataSource();
  cursoForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cursosService: CursosService, public dialog: MatDialog, private formBuilder: FormBuilder) {
    try {
      this.cursosService.getCursos().subscribe(resp => {
        this.dataSource.data = resp.rows;
      });
    } catch {
      console.log('');
    }
  }
  
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
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormcursoComponent, { data: this.cursoForm });

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
        this.cursosService.postCursos(curso).subscribe();
        this.dataSource.data.push(curso);
        this.dataSource._updateChangeSubscription();
        this.cursoForm.reset();
      }
    });
  }
}