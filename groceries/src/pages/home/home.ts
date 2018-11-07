import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";

  items = [
    {
      name: "  Cereals",
      quantity: "5"
    },
    {
      name: "Cheese",
      quantity: "1"
    },
    {
      name: "Cracker",
      quantity: "3"
    },
    {
      name: "Frozen Pizza",
      quantity: "2"
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index){
    const toast = this.toastCtrl.create({
      message : "Removing Item - "+item.name+" ...",
      duration : 3000
    });
    toast.present();
    this.items.splice(index);
  }

  addItem(){
    this.showItemPrompt();
  }

  showItemPrompt(){
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log(item)
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
