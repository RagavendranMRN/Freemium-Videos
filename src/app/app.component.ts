import { Xmb } from '@angular/compiler/src/i18n';
import { Component, VERSION, Input } from '@angular/core';
import xhrFactory from '@angular/core/schematics/migrations/xhr-factory';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  SearchQuery = '';
  addFlag = false;
  NewSearch = '';
  NewUrl = '';
  values = [];
  videoList = [
    'https://pixabay.com/videos/search/$search/',
    'https://www.pexels.com/search/videos/$search/',
    'https://dareful.com/?s=$search',
    'https://www.youtube.com/results?search_query=$search&sp=EgIwAQ%253D%253D',
    'https://coverr.co/s?q=$search',
    'https://www.videvo.net/search/$search/',
    'https://www.videezy.com/free-video/$search',
    'https://mazwai.com/search/$search/',
    'https://lifeofvids.com/search/$search',
  ];
  addNewEnable() {
    this.addFlag = true;
    console.log(this.addFlag);
  }
  addNewVideoUrl() {
    if (this.NewUrl != '' && this.NewSearch != '') {
      let newURL = this.NewUrl.replace(this.NewSearch, '$search');
      this.videoList.push(newURL);
      console.log(newURL);
    }
    this.addFlag = false;
  }
  generateUrls() {
    this.values = [];
    this.videoList.sort();
    this.videoList.map((x) => {
      let imageUrl = x.split('/');
      let image = 'http://www.google.com/s2/favicons?domain=' + imageUrl[2];
      const result = imageUrl[2].split('.').filter((word) => {
        if (word != 'www' && word != 'com') {
          return name;
        }
      });
      let url = x.replace('$search', this.SearchQuery);
      this.values.push({
        url: url,
        image: image,
        name: result[0].toUpperCase(),
      });
    });
  }
}
