import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../../core/services/trending.service';
import { Trending } from '../../core/interfaces/trending';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trending: Trending;

  constructor(
    private trendingService: TrendingService
  ) { }

  ngOnInit(): void {
    this.trendingService.getGifTrending().subscribe(res => {
      this.trending = res;
    });
  }

}
