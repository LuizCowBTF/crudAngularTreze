import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from 'src/app/shared';

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

  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
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
