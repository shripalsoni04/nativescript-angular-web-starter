import { Component } from "@angular/core";

import { SwissArmyKnife } from 'nativescript-swiss-army-knife';

@Component({
  selector: "my-app",
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {

  constructor() {
    // Setting $c-secondary color to android statusBar.
    SwissArmyKnife.setAndroidStatusBarColor('#689f38');

    // Setting StatusBarStyle to UIBarStyleBlack for iOS.
    SwissArmyKnife.actionBarSetStatusBarStyle(1);
  }
}
