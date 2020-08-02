import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private readonly apiKey = 'b5VC478eD1oiRwFyWTVs62FO0ZPHwdlJ';

  constructor(
    private http: HttpClient
  ) { }

  getGifTrending() {
    const params = {
      apiKey: this.apiKey,
      limit: '20'
    };

    return this.http.get(`https://api.giphy.com/v1/gifs/trending`, { params })
      .pipe(
        map((item: any) => {
          item.data = item.data.map(images => {
            return { id: images.id,
              title: images.title,
              url: images.images?.downsized_medium.url
            };
          });
          return item.data;
        })
      );
  }
}
