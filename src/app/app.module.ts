import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomRoutModule} from './hom-rout/hom-rout.module';
import {HomCompComponent} from './hom-rout/hom-comp/hom-comp.component';
import {ProjRoutModule} from './proj-rout/proj-rout.module';
import {ProjCompComponent} from './proj-rout/proj-comp/proj-comp.component';
import {ConRoutModule} from './con-rout/con-rout.module';
import {ConCompComponent} from './con-rout/con-comp/con-comp.component';
import {ServRoutModule} from './serv-rout/serv-rout.module';
import {ServCompComponent} from './serv-rout/serv-comp/serv-comp.component';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HomRoutModule,ProjRoutModule,ConRoutModule,ServRoutModule,RouterModule,
    RouterModule.forRoot([
      {
        path : 'home',
        component : HomCompComponent
      },
      {
        path : 'projects',
        component : ProjCompComponent
      },
      {
        path : 'services',
        component : ServCompComponent
      },
      {
        path : 'contact',
        component : ConCompComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
