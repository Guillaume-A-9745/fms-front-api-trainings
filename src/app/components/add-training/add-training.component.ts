import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent {

  training : Training = new Training(0, "", "", 0,"", 1);
  error : null | undefined;
  constructor(private apiService : ApiService, private route : Router) {}

  onAddTraining() {
    this.apiService.postTraining(this.training).subscribe({
      next: () => (this.route.navigate(['/trainings'])),
      error:(err) => ( console.error("Erreur lors de l'ajout de la formation :", err)),
      complete: () => (this.error = null)
      });
  }
}
