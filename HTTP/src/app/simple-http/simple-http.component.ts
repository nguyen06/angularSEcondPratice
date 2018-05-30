import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {

  data : Object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
    .subscribe((res: Response) => { // when the response from the server arrives, 
      this.data = res.json();       // the callback passed to subscribe(..) is called by observable
      this.loading = false;
    }
  );
  console.log("fuck here execute before"); // this one execute while waiting for the server return
}
  
  
}
