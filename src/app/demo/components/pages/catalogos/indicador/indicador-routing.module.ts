import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndicadorComponent } from './indicador.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: IndicadorComponent }
	])],
	exports: [RouterModule]
})
export class TipoIndicadorRoutingModule { }
