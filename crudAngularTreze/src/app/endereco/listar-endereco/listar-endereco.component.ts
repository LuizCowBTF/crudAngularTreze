import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EnderecoService } from '../services/endereco.service';
import { Endereco } from 'src/app/shared';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css'],
  preserveWhitespaces: true
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  removerEndereco($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover este endereço ${endereco.lograd}`)) {
      this.enderecoService.removerEndereco(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }

  abrirModalEndereco(endereco: Endereco) {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }

}
