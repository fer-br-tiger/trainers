import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as bootstrap from 'bootstrap';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { FormalumnoComponent } from '../formalumno/formalumno.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['delete', 'nombres', 'apellidos', 'dni', 'celular', 'mail', 'direccion_calle', 'direccion_numero', 'direccion_barrio', 'direccion_localidad'];
  dataSource = new MatTableDataSource();
  alumnoForm!: FormGroup;
  toastList!: bootstrap.Toast[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private alumnosService: AlumnosService, public dialog: MatDialog, private formBuilder: FormBuilder) {
    try {
      alumnosService.getAlumnos().subscribe(resp => {
        this.dataSource.data = resp;
      });
    } catch {
      console.log('');
    }
  }

  ngOnInit(): void {
    this.alumnoForm = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(8)]],
      celular: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      direccion_calle: ['', [Validators.required]],
      direccion_numero: ['', [Validators.required]],
      direccion_barrio: ['', [Validators.required]],
      direccion_localidad: ['', [Validators.required]]
    });

    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    this.toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl);
    });
  }

  ngAfterViewInit() {
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

  openDialogConfirm(row: any) {
    const dialogRef =  this.dialog.open(ConfirmDialog, {data: row.nombres});

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.alumnosService.deleteAlumno(row.dni).subscribe();
        let i = this.dataSource.data.indexOf(row);
        this.dataSource.data.splice(i, 1);
        this.dataSource._updateChangeSubscription();
        this.toastList[0].show();
      }
    })
  }

  openDialogAlumno() {
    let w: string;
    (screen.width <= 992)? w = '100%' : w = '50%';

    const dialogRef = this.dialog.open(FormalumnoComponent, {width: w, data: this.alumnoForm});

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        let alumno = {
          nombres: this.alumnoForm.get('nombres')?.value,
          apellidos: this.alumnoForm.get('apellidos')?.value,
          dni: this.alumnoForm.get('dni')?.value,
          celular: this.alumnoForm.get('celular')?.value,
          mail: this.alumnoForm.get('mail')?.value,
          direccionCalle: this.alumnoForm.get('direccion_calle')?.value,
          direccionNumero: this.alumnoForm.get('direccion_numero')?.value,
          direccionBarrio: this.alumnoForm.get('direccion_barrio')?.value,
          direccionLocalidad: this.alumnoForm.get('direccion_localidad')?.value
        };
        this.alumnosService.postAlumnos(alumno).subscribe();
        this.dataSource.data.push(alumno);
        this.dataSource._updateChangeSubscription();
        this.alumnoForm.reset();
      }
    })
  }

}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.html'
})
export class ConfirmDialog {
  constructor(@Inject (MAT_DIALOG_DATA) public data: string) {}
}