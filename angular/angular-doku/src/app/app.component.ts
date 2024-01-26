import { Component, OnInit } from '@angular/core';
import { NamespaceService } from './services/namespace.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-doku';

  constructor() {}
}
