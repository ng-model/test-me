import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonRadioGroup } from '@ionic/angular';
import data from './one.json';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  questions = data;
  @ViewChild('radioGroup') radioGroup: IonRadioGroup
  selectedRadioGroup: any;
  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    // this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Alert',
      subHeader: 'Notice',
      message: 'Read instructions carefully before answering.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  radioGroupChange(event) {
    console.log("radioGroupChange",event.detail);
    this.selectedRadioGroup = event.detail;
  }
  
  submit() {
    console.log(this.radioGroup.value);
    
  }
}
