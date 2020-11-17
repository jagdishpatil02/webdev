import { routes } from './routes';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TranslatorService } from '../shared/translator.service';


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        SharedModule,
    ],
    declarations: [],
    exports: [
        RouterModule,
    ]
})

export class RoutesModule {
   constructor(tr: TranslatorService) {
   }
}
