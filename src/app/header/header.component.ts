import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router){
  
  }

  addToDo(){
    console.log('navigate add-to-do')
    this.router.navigate(['/add-new-todo']);
  }

}
