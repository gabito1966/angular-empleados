import { Empleado } from './empleado.model';
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';

@Injectable()
export class EmpleadosService {
  constructor(
    private servicioVentanaEmergente: ServicioEmpleadosService,
    private dataService: DataServices
  ) {}

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }

  empleados: Empleado[]=[];

  /* new Empleado('Gabriel', 'García', 'Presidente', 800000),
       new Empleado('Mabel', 'Vizgarra', 'Directora', 600000),
       new Empleado('Diego', 'Mereles', 'Encargado', 250000),
       new Empleado('Federico', 'Guiance', 'Vendedor', 300000)
  ];*/

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Empleado que se va a agregar: ' +
        '\n' +
        empleado.nombre +" " + empleado.apellido +
        '\n' +
        'Salario: ' +
        empleado.salario
    );

    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];

    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice, empleado);
  }


  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }
}
