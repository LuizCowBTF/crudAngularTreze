import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade, Estado } from 'src/app/shared';

import { EstadoService } from 'src/app/estado/services/estado.service';
import { CidadeService } from './../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css'],
  preserveWhitespaces: true,
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodosEstados();

    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);
    if(res !== undefined){
      this.cidade = res;
    }
    else
    {
      throw new Error ("Cidade não encontrada: id = " + id);
    }
  }

  atualizarCidade(): void {
    if(this.formCidade.form.valid){
      this.cidadeService.atualizarCidade(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }


}
