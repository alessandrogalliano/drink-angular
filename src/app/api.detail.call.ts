import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiDetail {

  private apiUrl =  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'; 

  constructor(private http: HttpClient) {}

  getDati() {
    return this.http.get(this.apiUrl);
  }
}