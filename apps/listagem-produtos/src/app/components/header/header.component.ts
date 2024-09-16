import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataAccessCartComponent } from '@ng-mf/data-access-cart';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'ng-mf-header-component',
  templateUrl: `./header.component.html`,
  styleUrls: [`./header.component.css`],
})
export class AppHeaderComponent {
  cartService = inject(DataAccessCartComponent);
}
