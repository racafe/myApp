import { Component, ViewChild} from '@angular/core';
import {Http} from "@angular/http";
import { Content, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: any;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public http: Http) {
    this.loadProducts();    
  }

  ngAfterViewInit() {
    
    /*this.content.ionScrollEnd.subscribe((event)=>{
      console.log('scrolling ', event);
    });*/
  }

  entra(id){
    console.log("Entró "+id);
  }

  loadProducts(){
    console.log("Load products: ");
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      //
      
      var url = "http://technit.com.mx/americas/motionm/data/pantallas.php";
      
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          //alert(JSON.stringify(data.pantallas));
          this.products = data.pantallas;
          resolve(this.products);
        });
    });
  }
}
