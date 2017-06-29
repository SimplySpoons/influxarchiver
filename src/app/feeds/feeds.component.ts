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
  constructor() { }

  ngOnInit() {
  }

  hideFeed() {
    this.feedEditHidden = !this.feedEditHidden;
  }
  showFeed() {
    this.feedEditHidden = !this.feedEditHidden;
  }

}
