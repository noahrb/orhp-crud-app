import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrudExampleComponent } from './components/crud-example/crud-example.component';
import { UserService } from './services/user.service';
import { CreateUserModalComponent } from './components/crud-example/create-user-modal/create-user-modal.component';
import { RemoveUserComponent } from './components/crud-example/remove-user-modal/remove-user.component';
import { EditPolicyModalComponent } from './components/crud-example/edit-policy-modal/edit-policy-modal.component';
import { EditUserModalComponent } from './components/crud-example/edit-user-modal/edit-user-modal.component';
import { CreatePolicyModalComponent } from './components/crud-example/create-policy-modal/create-policy-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudExampleComponent,
    CreateUserModalComponent,
    RemoveUserComponent,
    EditPolicyModalComponent,
    EditUserModalComponent,
    CreatePolicyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
