import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Lista de Empleados';

  empleados: Empleado[] = [
    new Empleado('Gabriel', 'García', 'Presidente', 800000),
    new Empleado('Mabel', 'Vizgarra', 'Directora', 600000),
    new Empleado('Diego', 'Mereles', 'Encargado', 250000),
    new Empleado('Federico', 'Guiance', 'Vendedor', 300000)
  ];

  agregarEmpleado(){
    let miEmpleado =new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
