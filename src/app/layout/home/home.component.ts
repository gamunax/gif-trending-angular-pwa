import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private trendingService: TrendingService
  ) { }

  ngOnInit(): void {
    this.trendingService.getGifTrending().subscribe(res => {
      console.log(res);
    });
  }

}
