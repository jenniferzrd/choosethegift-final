import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RouterModule} from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UiComponent } from './ui/ui.component';
import { IdeasComponent } from './ideas/ideas.component';
import { CreateIdeaComponent } from './create-idea/create-idea.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { ShopComponent } from './shop/shop.component';
import { ItemService } from './item/item.service';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { TokenStorageService } from './auth/token-storage.service';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent,
    UiComponent,
    IdeasComponent,
    CreateIdeaComponent,
    HomeComponent,
    ProjectComponent,
    CreateProjectComponent,
    CartComponent,
    ItemComponent,
    ShopComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService, TokenStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
