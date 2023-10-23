import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  user={
    usuario: "",
    password: "",
  }

  constructor(public fb: FormBuilder, public navCtrl: NavController, public alertController: AlertController, private router: Router, private toastController: ToastController) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
   })
  }

  ngOnInit() {
  }

  async ingresar() {
    let formulario = this.formularioLogin.value;

    if (formulario.nombre == "" || formulario.password ==""){
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Debe llenar los campos',
        buttons:['Reintentar']
      });

      await alert.present();
      return;
    }else{
      this.presentToast('top', 'Bienvenido '+ this.user.usuario)
    }
    
    localStorage.setItem('ingresado','true');

   

    this.router.navigate(['home'])

  }

  async presentToast(position: 'top' | 'middle' | 'bottom',
                     message: string,
                     duration?:number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration?duration:3000,
      position: position,
    });
    await toast.present();
  }


}
