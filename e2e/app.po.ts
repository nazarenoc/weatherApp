import { browser, by, element } from 'protractor';

export class WeatherBraviPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('brv-root h1')).getText();
  }
}
