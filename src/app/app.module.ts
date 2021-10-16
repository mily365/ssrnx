import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TestWorldComponent } from './test-world/test-world.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BizUiModule} from "biz-ui";
import {InMemoryDataService} from "../../../team-workspace/projects/biz-ui/src/lib/in-memory-data.service";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TestWorldComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    BizUiModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
