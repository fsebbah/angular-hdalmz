import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    console.log(this.activatedRoute.snapshot.queryParamMap);
  }

}