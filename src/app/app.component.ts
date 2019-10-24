import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  beers: any[];

  constructor(private httpClient: HttpClient) {
    this.getBeers();
  }

  getBeers() {
    this.httpClient
      .get<any[]>('http://localhost:8082/beers')
      .subscribe(
        (response) => {
          this.beers = response;
          console.log('Beer list loaded!');
        },
        (error) => {
          console.log('Error: ' + error);
        }
      );
  }
}
