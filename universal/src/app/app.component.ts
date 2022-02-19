import { Component } from '@angular/core';
import { TitleStore } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title$ = this.titleStore.selectTitle();
  constructor(private titleStore: TitleStore) {}
}
