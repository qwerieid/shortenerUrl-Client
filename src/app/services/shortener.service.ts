import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from "../models/url.model";

const baseUrl = 'http://localhost:8080/urls';

@Injectable({
  providedIn: 'root',
})
export class ShortenerService {
  constructor(private http: HttpClient) {}

  saveUrl(data: any): Observable<Url> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
    });
    return this.http.post(`${baseUrl}`, data, { headers })
  }

  getAll(): Observable<Url[]> {
    return this.http.get<Url[]>(`${baseUrl}`);
  }

  deleteAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json-patch+json',
    });
    return this.http.post(`${baseUrl}`+"/deleteAll", null,{ headers })
  }

  get(shortenedUrl: any): Observable<Url> {
    return this.http.get<Url>(`${baseUrl}/${shortenedUrl}`);
  }

}
