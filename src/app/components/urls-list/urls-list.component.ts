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

}
