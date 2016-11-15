import { Component } from '@angular/core';

import { HomeCommonViewModel } from '../../x-shared/app/home';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeCommonViewModel]
})
export class HomeComponent {

  constructor(public cvm: HomeCommonViewModel) {

  }
}
