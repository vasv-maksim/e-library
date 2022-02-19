import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleStore } from './app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title$: Observable<string> = this.titleStore.selectTitle();
  constructor(private titleStore: TitleStore) { }
}
