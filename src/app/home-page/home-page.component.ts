import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.call';


@Component({
  selector: 'HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePage implements OnInit {
  dati: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDati().subscribe((data) => {
      this.dati = data;
      console.log(this.dati)
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/