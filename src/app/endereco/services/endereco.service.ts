import { Injectable } from '@angular/core';

import { Endereco } from 'src/app/shared';

const LS_CHAVE: string = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserirEndereco(endereco: Endereco) {
    const enderecos = this.listarTodos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);

    localStorage[LS_CHAVE] = JSON.stringify(endereco);
  }

  buscarPorId(id: number): Endereco | undefined {
    const enderecos: Endereco[] = this.listarTodos();
    return enderecos.find(endereco => endereco.id === id);
  }

  atualizarEndereco(endereco: Endereco): void {
    const enderecos: Endereco[] = this.listarTodos();
    enderecos.forEach( (obj, index, objs) => {
      if(endereco.id === obj.id) {
        objs[index] = endereco;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(endereco);
  }

  removerEndereco(id: number): void {
    let enderecos: Endereco[] = this.listarTodos();
    enderecos = enderecos.filter(endereco => endereco.id !== id );

    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
