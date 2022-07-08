import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InAppDataService } from './in-app-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MVPComponentComponent } from './mvpcomponent/mvpcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MVPComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Must add FormsModule to NgModule metadata
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InAppDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
