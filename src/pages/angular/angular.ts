import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import {Http} from "@angular/http";
import {Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-angular',
  templateUrl: 'angular.html'
})
export class AngularPage {
  posts: any;

  constructor(public navCtrl: NavController, private browserTab: BrowserTab, public http: Http, private plt: Platform) {
    //this.loadScreens();
    //alert(this.plt.is("cordova"));
  }

  ionViewDidLoad() {
    console.log("I'm alive!");
  }

  ionViewWillEnter(){
    console.log("Refresh everything here!");
    this.loadScreens();
  }

  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
  

  loadScreens(){
    console.log("Load screens: ");
    /*if (this.posts) {
    // already loaded data
      return Promise.resolve(this.posts);
    }*/

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
          this.posts = data.pantallas;
          resolve(this.posts);
        });
    });
  }

  openUrl(){
      this.browserTab.isAvailable()
          .then((isAvailable: boolean) => {

          if(isAvailable) {
            alert("Está disponible");
            this.browserTab.openUrl('https://www.techiediaries.com');

          } else {
            alert("No está disponible");
              // if custom tabs are not available you may  use InAppBrowser

          }

          });        
  }
}
