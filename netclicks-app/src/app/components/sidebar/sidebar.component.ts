import { Component } from '@angular/core';
import { SITEBARINFO } from '../../constants/sitebar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sitebarInfo = SITEBARINFO
}
