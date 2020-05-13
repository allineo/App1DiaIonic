import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  contactField: null;
  messageField: null;

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  async sendForm(f: NgForm) {

    const message = 'Contato: ' + this.contactField +
                    '<br>Mensagem:' + this.messageField;

    const alert = await this.alertController.create({
      header: 'Alerta!',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Alert Confirmed');
          }
        }
      ]
    });
    await alert.present();
  }

}

