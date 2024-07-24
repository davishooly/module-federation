import { Component } from '@angular/core';
import { connectRouter } from '@angular-architects/module-federation-tools';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-app';

  constructor(private router: Router) {
    connectRouter(this.router);
  }
}
