import { Empleado } from './empleado.model';
import { Injectable, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService){}

 
    empleados: Empleado[] = [
      
       new Empleado('Gabriel', 'García', 'Presidente', 800000),
       new Empleado('Mabel', 'Vizgarra', 'Directora', 600000),
       new Empleado('Diego', 'Mereles', 'Encargado', 250000),
       new Empleado('Federico', 'Guiance', 'Vendedor', 300000)
  ];

  agregarEmpleadoServicio(empleado:Empleado){

    this.servicioVentanaEmergente.muestraMensaje(
      "Empleado que se va a agregar: " 
      + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario
    );

    this.empleados.push(empleado);
  }
  
}
