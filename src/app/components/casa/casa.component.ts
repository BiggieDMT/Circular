import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicerestService } from 'src/app/services/servicerest.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss'],
})
export class CasaComponent  implements OnInit {
  data: any;

  users:any;
  user:any={
    id: null,
    nombre: "",
    username: "",
    password: ""
  };

  comparedWith:any;

  constructor(private activateRouter: ActivatedRoute, private router: Router, private api: ServicerestService) {
    
    this.getUserList();

    // this.activateRouter.queryParams.subscribe(params =>{
    //   if(this.router.getCurrentNavigation()?.extras.state){
    //     this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
    //     console.log(this.data);
    //   }else{
    //     this.router.navigate(['/inicio']);
    //   }
    // });

    
  }

  getUser(userId: any) {
    this.api.getUser(userId).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  getUserList() {
    this.api.getUserList().subscribe((data) => {
      console.log(data);
      this.users = data;

    });
  }

  logout() {
    
    localStorage.removeItem('ingresado');
    
    this.router.navigate(['inicio']);
  }

  ngOnInit() {}

}
