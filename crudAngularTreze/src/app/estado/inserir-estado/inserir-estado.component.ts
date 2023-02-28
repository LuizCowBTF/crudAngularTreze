import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Estado } from 'src/app/shared';

import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css'],
  preserveWhitespaces: true,
})
export class InserirEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(
    private estadoService: EstadoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.estado = new Estado();
  }

  inserirEstado(): void {
    if(this.formEstado.form.valid) {
      this.estadoService.inserirEstado(this.estado);
      this.router.navigate(["/estados"])
    }
  }

}
