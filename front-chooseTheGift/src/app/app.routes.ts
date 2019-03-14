import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ProjectComponent } from './project/project.component';
import { CreateIdeaComponent } from './create-idea/create-idea.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'index', component: AppComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'ideas', component: IdeasComponent },
    { path: 'createusers', component: CreateUserComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'createidea', component: CreateIdeaComponent },
    { path: 'createproject', component: CreateProjectComponent },
    { path: 'cart', component: CartComponent },
    { path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];