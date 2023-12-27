import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';


@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  listing: Listing | undefined;
  
  
  constructor(
    private router: ActivatedRoute,
  ){}

 ngOnInit(): void {
  const id = this.router.snapshot.paramMap.get('id');
  this.listing = fakeListings.find(listing => listing.id === id);
 }

}
