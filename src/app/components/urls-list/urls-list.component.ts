import { Component, OnInit } from '@angular/core';
import { Url } from 'src/app/models/url.model';
import { ShortenerService } from 'src/app/services/shortener.service';
@Component({
  selector: 'app-urls-list',
  templateUrl: './urls-list.component.html',
  styleUrls: ['./urls-list.component.css'],
})
export class UrlsListComponent {
  urls: Url[]= [];
  result: any;
  constructor(private shortenerService: ShortenerService) {}

  ngOnInit(): void {
    this.getUrls();
  }

  getUrls(): void {

    this.shortenerService.getAll().subscribe({
      next: (data) => {
        this.urls = data;
        console.log(data);
      },
      error: (err) => {
        console.error('Save error:', err);
        alert(err.error.message);
      }
    });
  }

  getOriginUrl(shortenedUrl: string|undefined, event: Event): void {
    event.preventDefault();

    const formattedUrl = shortenedUrl?.substring(shortenedUrl?.lastIndexOf('/') + 1);

    this.shortenerService.get(formattedUrl).subscribe({
      next: (data) => {
        const originalUrl = data.originalUrl;
        if (originalUrl) {
          window.open(originalUrl, '_blank');
        } else {
          console.error('Original URL is undefined or null.');
        }
      },
      error: (err) => {
        console.error('Save error:', err);
        alert(err.error.message);
      }
    });
  }
  openNewTab(url: string): void {
    window.open(url, '_blank');
  }

}
