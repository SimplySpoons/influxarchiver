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
  closeSearch = false;
  search = '';
  @Input() showResults;
  constructor(private accountService: AccountService) {
    this.accountService.isLoading.subscribe(loading => {
      console.log(loading);
      this.loading = loading;
    })
  }
  getValue(term: string){
    this.search = term;
    this.emitTerm(this.search);
  }
  emitTerm(term: string){
    this.accountService.SearchTerm.next(term);
  }
}
