import { Component, HostListener, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;

  constructor() {}

  ngOnInit(): void {
    this.listen();
  }

  listen() {
    let hamburger = document.getElementById('hamburger') as HTMLElement;
    let sidebar = document.getElementById('sidebar') as HTMLElement;
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      if (document.documentElement.style.overflow == 'hidden') {
        document.documentElement.style.overflow = 'scroll';
      } else {
        document.documentElement.style.overflow = 'hidden';
      }
    });
  }

  scrollTo(element: string) {
    document.getElementById(element)?.scrollIntoView();
  }
  closeSideBar(){
    let sidebar = document.getElementById('sidebar') as HTMLElement;
    sidebar.classList.remove('show');
  }
}
