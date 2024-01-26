import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeIt from '@angular/common/locales/it';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonComponent } from './components/button/icon-button.component';
import { ImageComponent } from './components/image/image.component';

registerLocaleData(localeIt);

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, IconButtonComponent, ImageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'it',
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
