import { Component, OnInit } from '@angular/core';
import { ApiDetail } from '../api.detail.call';


@Component({
  selector: 'Detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class Detail implements OnInit {
  dati: any;
  ingredients: string[]=[]

  constructor(private apiService: ApiDetail) {}

  ngOnInit() {
    this.apiService.getDati().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
      for(let i = 1; i < 15; i++){
        const ingredientKey = `strIngredient${i}`
        if(this.dati.drinks[0][ingredientKey]) {this.ingredients.push(this.dati.drinks[0][ingredientKey])}
    }
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/