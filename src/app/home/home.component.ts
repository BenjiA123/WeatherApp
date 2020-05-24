import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location = {
    city: 'London',
    code: 'uk'
  }
  value: any;
  weatherStatus: any;
  response: any
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    this.value = localStorage.getItem('location');
    if (this.value != null) {
      this.location = JSON.parse(this.value)
    }
    this.location = {
      city: 'Minna',
      code: 'uk'
    }
    this.weatherStatus = this.weatherService.getWeather(this.location.city, this.location.code)
      .subscribe(
        (res) => {
          this.weatherStatus = res
          console.log(this.weatherStatus)
        }
      )
  }



}
