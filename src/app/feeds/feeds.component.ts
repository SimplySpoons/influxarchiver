import { Component, OnInit } from '@angular/core';
import { Feed } from '../shared/feed.model';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds: Feed[] = [
    new Feed('vAuto', 5),
    new Feed('DMI', 10),
    new Feed('SomethingElse', 18)
  ];
  feedEditHidden = false;
  feedListHidden = false;
  componentLoading = false;
  loadingHidden = true;

  constructor() { }

  ngOnInit() {
  }

  /* There is a much cleaner way of doing this with a single function, but for the sake of time this will do */
  hideFeed() {
    this.feedEditHidden = !this.feedEditHidden;
  }
  showFeed() {
    this.feedEditHidden = !this.feedEditHidden;
  }
  hideFeedEdit() {
    this.feedListHidden = !this.feedListHidden;
  }
  showFeedEdit() {
    this.feedListHidden = !this.feedListHidden;
  }
  hideLoading() {
    this.loadingHidden = !this.loadingHidden;
  }
  showLoading() {
    this.loadingHidden = !this.loadingHidden;
  }

}
