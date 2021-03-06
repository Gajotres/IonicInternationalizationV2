import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
	        HttpClientModule,
	        TranslateModule.forRoot({
	            loader: {
	                provide: TranslateLoader,
	                useFactory: HttpFactory,
	                deps: [HttpClient]
	            }
	        })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

// important for "ahead of time" compilation
export function HttpFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);

    /* If you want to change the default translations folder do it like this */

    //return new TranslateHttpLoader(http, './assets/i18mnh/', '.json');
}