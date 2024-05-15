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
  constructor(private pacienteService:PacienteService) { }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((pacientes)=> {
      this.pacientes =pacientes;
    })
  }
  ngOnInit() {
    this.getPacientes();
  }

}
