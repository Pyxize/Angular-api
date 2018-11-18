import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleId: number = null;
  article: any = null;
  comments: any = null;

  constructor(
    private articlesServices: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.articleId = parseInt(params['id'], 10);
        this.getArticle();
        this.getComments();
      }
    });
  }

  getArticle() {
    this.articlesServices.get(this.articleId).subscribe((res: any) => {
      this.article = res;
    }, (err: any) => {
      console.error(err);
    });
  }

  getComments() {
    this.articlesServices.comments(this.articleId).subscribe((res: any) => {
      this.comments = res;
    }, (err: any) => {
      console.error(err);
    });
  }

  delete() {
    this.articlesServices.delete(this.articleId).subscribe((res: any) => {
      this.router.navigate(['/']);
    }, (err: any) => {
      console.error(err);
    });
  }

}
