import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit{

  listTrainings : Training[] | undefined;
  error: null | undefined;

  constructor(private cartService : CartService, 
              private apiService : ApiService, 
              private route : Router) {
  }
  
  ngOnInit(): void {
    this.display();
  }

  display(){
    this.apiService.getTrainings().subscribe({
      next: (data) => (this.listTrainings = data.reverse()),
      error: (err) => (this.error = err.message),
      complete: () => (this.error = null)
    });
  }

  onAddToCard( training : Training ) {
    this.cartService.addTraining(training);
  }

  onEditTraining(training: Training) {
    this.route.navigate(['/editTraining'], {state: {training}});
  }

  onDeleteTraining( id : number ) {
    this.apiService.deleteTraining(id).subscribe({
      next: () => (this.listTrainings = this.listTrainings?.filter(Training => Training.id !== id)),
      error: (err) => (console.error('Erreur lors de la suppression de la formation :', err)),
      complete: () => (this.error = null)
    });
  }
  
}
