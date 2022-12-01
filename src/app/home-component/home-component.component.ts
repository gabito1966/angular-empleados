import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Lista de Empleados';

  constructor(private miServicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) {}

ngOnInit(): void {
  // this.empleados = this.empleadosService.empleados;
  /*this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=> {
    this.empleados = Object.values(misEmpleados);

    this.empleadosService.setEmpleados(this.empleados);
  });*/
}

  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    // this.miServicio.muestraMensaje('nombre del empleado: ' + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSalario: number = 0;
}
