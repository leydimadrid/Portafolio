import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'portafolioLeydiMadrid';

  ngOnInit(): void {
    initFlowbite();
  }
}
