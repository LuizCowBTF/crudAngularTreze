import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cidade } from 'src/app/shared';

import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css'],
  preserveWhitespaces: true,
})
export class InserirCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;

  constructor(
    private cidadeService: CidadeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cidade = new Cidade();
  }

  inserirCidade(): void {
    if(this.formCidade.form.valid) {
      this.cidadeService.inserirCidade(this.cidade);
      this.router.navigate(["./cidades"]);
    }
  }

}
