import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor() { }
  ngOnInit(): void {
    this.listings = fakeListings;
    throw new Error('Method not implemented.');
  }

  onDeleteClicked(listingId:string): void {
   
    alert('Deleting your listings with id ${listingId}');
  }

}
