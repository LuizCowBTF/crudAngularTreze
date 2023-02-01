import { EnderecoService } from './services/endereco.service';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

export const options: Partial<null | IConfig> | ( () => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    EditarEnderecoComponent,
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(options),
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
