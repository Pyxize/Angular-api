import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any = null;
  search: string = null;

  constructor(
    private articlesServices: ArticlesService
  ) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articlesServices.getList().subscribe((res: any) => {
      this.articles = res;
    }, (err: any) => {
      console.error('API doesnt work.');
    });
  }

}
