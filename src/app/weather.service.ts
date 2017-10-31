import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {

    API_KEY = 'e454faa3f2d2749292099eaed8846cd0';

    URL;
    
    constructor(public http: Http) {
        this.URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    }

    getWeather(city) {
        return this.http.get(this.URL + city + '&units=metric&APPID=' + this.API_KEY).map(res => res.json());
    }

}