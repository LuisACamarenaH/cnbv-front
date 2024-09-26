import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TipoIndicadorComponent } from './tipoIndicador.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TipoIndicadorComponent }
	])],
	exports: [RouterModule]
})
export class TipoIndicadorRoutingModule { }
