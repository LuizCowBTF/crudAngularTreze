import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CidadeService } from '../services/cidade.service';
import { Cidade } from 'src/app/shared';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css'],
  preserveWhitespaces: true,
})
export class ListarCidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(
    private cidadeService: CidadeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.cidades = this.listarTodasCidades();
  }

  listarTodasCidades(): Cidade[] {
    return this.cidadeService.listarTodasCidades();
  }

  removerCidade($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a cidade ${cidade.nome}`)){
      this.cidadeService.removerCidade(cidade.id!);
      this.cidades = this.listarTodasCidades();
    }
  }

  abrirModalCidade(cidade: Cidade) {
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }

}
