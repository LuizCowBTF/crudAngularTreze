import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MinimoValidatorDirective, NumericoDirective } from './directives';
import { MyPipePipe } from './pipes/my-pipe.pipe';

@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MyPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MyPipePipe
  ]
})
export class SharedModule { }
