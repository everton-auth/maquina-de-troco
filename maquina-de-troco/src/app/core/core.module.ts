import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UtilModule } from '../utils/util.module';
import { CaixaComponentComponent } from './caixa-component/caixa-component.component';
import { CommonsModule } from './common/commons.module';
import { CoreRoutingModule } from './core.routing.module';
import { MainComponentComponent } from './main-component/main-component.component';

@NgModule({
  declarations: [
    CaixaComponentComponent,
    MainComponentComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    UtilModule,
    SharedModule,
    CommonsModule,
  ],
})
export class CoreModule { }
