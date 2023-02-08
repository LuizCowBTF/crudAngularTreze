import { EstadoService } from './services/estado.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEstadoComponent } from './modal-estado/modal-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    ModalEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ListarEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
