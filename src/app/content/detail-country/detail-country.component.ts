import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../Country';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss']
})
export class DetailCountryComponent implements OnInit {

  name: String = '';
  private sub: any;
  private sub1: any;
  countryn : any;

  constructor(private route : ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']; 
   });
   console.log(this.location.getState());
   this.countryn = this.location.getState();
  }

}
