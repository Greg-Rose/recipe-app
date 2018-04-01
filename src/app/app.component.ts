import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  page: string = 'recipes';

  changePage(newPage: string) {
    this.page = newPage;
  }
}
