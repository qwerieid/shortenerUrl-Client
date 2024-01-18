import { Component } from '@angular/core';
import { ShortenerService } from 'src/app/services/shortener.service';
import { Url } from '../../models/url.model';
@Component({
  selector: 'generate-shortenerUrl',
  templateUrl: './generate-shortenerUrl.component.html',
  styleUrls: ['./generate-shortenerUrl.component.css'],
})
export class GenerateShortenerUrlComponent {
  url: Url = {
    originalUrl: ''
  };
  constructor(private shortenerService: ShortenerService) {}

  generateShortenerUrl(): void {

    const data =
      { originalUrl: this.url.originalUrl }
    ;
    this.shortenerService.saveUrl(data)
      .subscribe({
        next: (res) => {

          this.url.originalUrl = '';
          window.location.reload();
        },
        error: (err) => {
          console.error('Save error:', err);
          alert(err.error.message);
        }
      });
  }

  deleteAll(): void {

    this.shortenerService.deleteAll().subscribe({
      next: (res) => {
        window.location.reload();
      },
      error: (e) => console.error(e)
    });
  }
}
