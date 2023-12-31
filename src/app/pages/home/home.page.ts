import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {
    this.router.navigate(['home/casa']);
  }
  
  segmentChanged($event: any){
    console.log("Hola")
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['/home/'+direccion]);
  }
  
  
}
