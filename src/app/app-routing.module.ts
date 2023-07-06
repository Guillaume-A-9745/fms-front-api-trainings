import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { EditTrainingComponent } from './components/edit-training/edit-training.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path : "login", component : LoginComponent },
  { path : "trainings", component : TrainingsComponent },
  { path : "addTraining", component : AddTrainingComponent },
  { path : "editTraining", component : EditTrainingComponent },
  { path : "cart", component : CartComponent },
  { path : "", redirectTo : "login",pathMatch : 'full' },
  { path : "404", component : NotFoundComponent },
  { path : "**", redirectTo : "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
