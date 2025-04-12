import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ScrapPricesComponent } from './pages/scrap-prices/scrap-prices.component';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule ,RouterModule ,NavbarComponent,SidebarComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecycLand';
}
