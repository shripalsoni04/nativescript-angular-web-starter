import { Component } from "@angular/core";

import { HomeCommonViewModel } from '../../x-shared/app/home';

@Component({
  selector: "home",
  templateUrl: "modules/home/home.component.html",
  styleUrls: ['modules/home/home.component.css'],
  providers: [HomeCommonViewModel]
})
export class HomeComponent {

  constructor(public cvm: HomeCommonViewModel) {

  }
}
