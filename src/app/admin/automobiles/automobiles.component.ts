import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car'; 
@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.scss']
})
export class AutomobilesComponent implements OnInit {

	 cars = [ 
    new Car(1995, "Honda", "Accord", "Sedan"),
    new Car(1990, "Ford", "F-150", "Pickup"),
    new Car(2000, "GMC", "Tahoe", "SUV"),
    new Car(2010, "Toyota", "Tacoma", "Pickup"),
    new Car(2005, "Lotus", "Elise", "Roadster"),
    new Car(1995, "Honda", "Civic", "Sedan"),
    new Car(1997, "Ford", "F-150", "Pickup"),
    new Car(2012, "GMC", "Tahoe", "SUV"),
    new Car(2010, "Toyota", "Tacoma", "Pickup"),
    new Car(2015, "Lotus", "Elise", "Roadster"),
    new Car(2018, "Subaru", "Outback", "Wagon")
    ];

  constructor() { }

  ngOnInit() {
  }

}
