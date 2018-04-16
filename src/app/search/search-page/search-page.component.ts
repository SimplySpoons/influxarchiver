import { slideDownAnimation } from './../../_animations/slide-down-animation';
import { Subject } from 'rxjs/Subject';
import { AccountService } from './../../_services/account.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  animations: [slideDownAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideDownAnimation]': 'false' }
})


export class SearchPageComponent {
  loading = false;
  @Input() showResults;
  constructor(private accountService: AccountService) {
    this.accountService.isLoading.subscribe(loading => {
      this.loading = loading;
    })
  }
}


