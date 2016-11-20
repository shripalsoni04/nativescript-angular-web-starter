import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { RouterLinkStubDirective } from './router-link-stub.directive';
import { RouterOutletStubComponent } from './router-outlet-stub.component';
import { RouterStub } from './router-stub.service';

// export for convenience.
export { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  exports: [
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  providers: [
    { provide: Router, useClass: RouterStub }
  ]
})
export class RoutingStubsModule { }
