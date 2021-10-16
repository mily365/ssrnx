import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {TestWorldComponent} from "./test-world/test-world.component";

const routes: Routes = [
  {path:'',component:HelloWorldComponent},
  {path:'test',component:TestWorldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
