import { Component, Input, OnInit } from '@angular/core';
import { ShortenerService } from 'src/app/services/shortener.service';
import { Url } from "../../models/url.model";

@Component({
  selector: 'app-get-origin-url',
  templateUrl: './get-originUrl.component.html',
  styleUrls: ['./get-originUrl.component.css'],
})
export class GetOriginUrlComponent {

  url: Url = {
    shortenedUrl: ''
  };
  result: any;
  constructor(private shortenerService: ShortenerService) {
  }

  getOriginUrl(shortenerUrl: string): void {
    this.result = null;

    const formattedUrl = shortenerUrl.substring(shortenerUrl.lastIndexOf('/') + 1);

    this.shortenerService.get(formattedUrl).subscribe({
      next: (data) => {
        this.result = data;
        console.log(data);
        shortenerUrl = '';
      },
      error: (err) => {
        console.error('Save error:', err);
        this.result = null;
        alert(err.error.message);
      }
    });
  }



}
