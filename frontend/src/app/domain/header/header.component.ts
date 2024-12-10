import { Component } from '@angular/core';
import { DownloadComponent } from "../components/download/download.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DownloadComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
