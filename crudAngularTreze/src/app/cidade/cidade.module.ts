import { NgSelectModule } from '@ng-select/ng-select';
import { CidadeService } from './services/cidade.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    EditarCidadeComponent,
    ListarCidadeComponent,
    InserirCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgSelectModule,
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
