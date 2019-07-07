import { Component, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild("slides") slides: IonSlides;

  constructor(
    public toastCtrl: ToastController
  ) { }
  ionViewDidLoad() {

  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();

  }
  nextSlide() {
    this.slides.slideNext();
    this.showToast("Slide has been Next");
  }

  previouSlide() {
    this.slides.slidePrev();
    this.showToast("Slide has been Previous");

  }

  async showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 500,
      showCloseButton: true,
      color: 'dark'
    }).then(toast => {
      toast.present();
    })
  }
}
