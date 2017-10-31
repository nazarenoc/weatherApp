import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'brv-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any
  city: string = 'Fortaleza'
  icon: string = ''

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getData()
  }

  public getData() {
    this.weatherService.getWeather(this.city)
      .subscribe(response => {        
        this.weather = response        
      })
  }

}
