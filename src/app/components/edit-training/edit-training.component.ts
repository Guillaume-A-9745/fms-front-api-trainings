import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})
export class EditTrainingComponent implements OnInit{

  training!: Training;
  error : null | undefined;
  
  constructor(private apiService : ApiService, private route : ActivatedRoute, private router : Router){
  }
  ngOnInit(): void {
    this.training = history.state.training;
  }
  
  onEditTraining(){
    this.apiService.putTraining(this.training).subscribe({
      next: () => (this.router.navigate(['/trainings'])),
      error:(err) => ( console.error("Erreur lors de la modification de la formation :", err)),
      complete: () => (this.error = null)
    });
  }
}
