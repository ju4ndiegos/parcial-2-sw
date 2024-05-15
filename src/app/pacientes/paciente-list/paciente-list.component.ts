import { Component, OnInit } from '@angular/core';
import { Paciente } from '../Paciente';
import { PacienteService } from '../Paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit {
  pacientes: Array<Paciente> = [];
  menores: number = 0;

  selectedPaciente!: Paciente; 
  selected : Boolean = false;
  constructor(private pacienteService:PacienteService) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes)=> {
      this.pacientes =pacientes;
      
      for (let i=0; i<pacientes.length;i++){
        if (pacientes[i].edad<18){
          this.menores++;
        }

      }
      
    })
  }
  onSelected(book: Paciente): void {
    this.selected = true;
    this.selectedPaciente = book;
  }
  ngOnInit() {
    this.getPacientes();
  }

}
