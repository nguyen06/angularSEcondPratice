import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from './search-result.model';
import { YouTubeSearchService } from './you-tube-search.service';
import { IfObservable } from 'rxjs/observable/IfObservable';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

@Component({
    selector: 'app-search-box',
    template: `<input type="text" class="form-control" placeholder="Search" autofocus>`
})

export class SearchBoxComponent implements OnInit {
    @Output() loading: EventEmitter<boolean> = new EventEmitter();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(
        private youtube: YouTubeSearchService,
        private el: ElementRef
    ){}

    ngOnInit(): void {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
        .map((e: any) => e.target.value) //extract the value of the input
        .filter((text: string) => text.length > 1) // filter out if empty
        .debounceTime(250) // only once every 250ms
        .do(()=> this.loading.emit(true)) // enable loading
        .map((query: string) => this.youtube.search(query))
        .switch()
        // act on the return of the result
        .subscribe(
            (results: SearchResult[]) => { // on success
                console.log("results hahh ", results);
                this.loading.emit(false);
                this.results.emit(results);
            },
            (err: any) => { // on error
                console.log(err);
                this.loading.emit(false);
            },
            () => { // on completion
                this.loading.emit(false)
            }
        );

    }
}