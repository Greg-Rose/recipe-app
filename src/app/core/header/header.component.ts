import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dsService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dsService.storeRecipes().subscribe(
      (response: Response) => {},
      (error) => console.log(error)
    );
  }

  onFetchData() {
    this.dsService.fetchRecipes();
  }

  onSignout() {
    this.authService.signout();
  }
}
