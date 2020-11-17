import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RoutesModule } from "./routes/routes.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SharedModule } from "./shared/shared.module";
import {
  TranslateService,
  TranslateModule,
  TranslateLoader
} from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslatorService } from "./shared/translator.service";
import { SharedDataService } from "./shared/shared.data.service";
import { HttpModule } from "@angular/http";
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpModule,
    HttpClientModule,
    SharedModule.forRoot(),
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [LayoutComponent, SidebarComponent, FooterComponent],
  providers: [
    TranslatorService,
    SharedDataService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
