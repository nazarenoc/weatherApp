import { WeatherBraviPage } from './app.po';

describe('weather-bravi App', () => {
  let page: WeatherBraviPage;

  beforeEach(() => {
    page = new WeatherBraviPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to brv!');
  });
});
