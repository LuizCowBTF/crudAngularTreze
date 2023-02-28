import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/shared';

import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css'],
  preserveWhitespaces: true
})
export class InserirEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.endereco = new Endereco();
  }

  inserirEndereco(): void {
    if(this.formEndereco.form.valid){
      this.enderecoService.inserirEndereco(this.endereco);
      this.router.navigate(["/enderecos"]);
    }
  }

}
