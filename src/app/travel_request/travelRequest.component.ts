import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

export class TravelRequest {
  public originationAirport: string;
  public destinationAirport: string;
  public regdate: Date;
  public numOfTravelers: number;
}

@Component({
  selector: 'app-travelrequest',
  templateUrl: './travelRequest.component_r6.html',
  styleUrls: ['./travelRequest.component.css']
})
export class TravelRequestComponent implements OnInit {

  constructor() { }


  model = new TravelRequest();
  price: string;
  ngOnInit(): void {
  }

  onSubmit(form): void {
    this.price = 'The price is : ' + (form.value.numOfTravelers * 150).toString() + '$';
    console.log(form.value.numOfTravelers * 150 + '$');
  }
}
