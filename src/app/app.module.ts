import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
const myRouter:Routes=[
  {
  path:"",
  component:AdminloginComponent

},

{
  path:"delete",
  component:DeleteComponent
},
{
  path:"edit",
  component:EditComponent
},
{
   path:"entry",
   component:BookentryComponent
},

{
  path:"search",
  component:SearchComponent
},
{
  path:"view",
  component:ViewComponent
},
{
  path:"userlogin",
  component:UserloginComponent
},
{
  path:"userregistration",
  component:UserregComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UserregComponent,
    BookentryComponent,
    SearchComponent,
    DeleteComponent,
    EditComponent,
    ViewComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRouter)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
