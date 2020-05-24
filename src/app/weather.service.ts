import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()

export class WeatherService {
  apiKey = 'bbad229f0eae529b99b1bdb7b4346710'
  url;
  constructor(private httpClient: HttpClient) {
    this.url = 'api.openweathermap.org/data/2.5/weather?q='

  }
  public getWeather(city, code) {
    const header = new HttpHeaders().set('Content-Type', 'application/json')
    //  Example request
    // api.openweathermap.org/data/2.5/weather?q=Minna&APPID=bbad229f0eae529b99b1bdb7b4346710
    return this.httpClient.get(`${this.url}${city}&APPID=${this.apiKey}`, {
      observe: 'body',
      responseType: 'json',
      headers: header
    })
  }
}
