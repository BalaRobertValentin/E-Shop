import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Output()  pageChanged = new EventEmitter<number>();

  constructor(){}

  ngOnInit(){

  }

  onPagerChange(event: any){
    this.pageChanged.emit(event.page);
  }

}
