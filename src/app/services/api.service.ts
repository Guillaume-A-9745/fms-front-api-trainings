import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  
  // Afficher toutes les formations
  public getTrainings() {
    return this.http.get<Training[]>(environment.host + '/api/trainings');
  }

  //Afficher une formation par son id
  public getTraining(id: string) {
    return this.http.get<Training>(environment.host + '/api/trainings/' + id);
  }

  //Enregistrer un nouvelle formation
  postTraining(training: Training) {
    return this.http.post<Training>(environment.host + '/api/trainings', {
      name: training.name,
      description: training.description,
      price: training.price,
      quantity: 1,
    });
  }

  //Supprimer une formation
  deleteTraining(id: number) {
    return this.http.delete<Training>(environment.host + '/api/trainings/' + id);
  }

  //Mettre à jour une formation
  putTraining(training: Training) {
    return this.http.put<Training>(environment.host + '/api/trainings/' + training.id, {
      id: training.id,
      name: training.name,
      description: training.description,
      price: training.price,
      quantity: 1,
    });
  }
}