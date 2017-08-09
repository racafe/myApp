import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  openModal(){
    var photos = [{url: 'http://cip.chat/ionic-gallery-modal-demo/assets/images/1.jpg',type:'jpg'},{url: 'http://cip.chat/ionic-gallery-modal-demo/assets/images/1.jpg',type:'jpg'}];
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: photos,
      initialSlide: 0
    });
    modal.present();
  }
}
