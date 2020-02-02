export class AppConstants {
  // no inferable types
  public static GOOGLE_GEOLOCATION_API = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
  public static GOOGLE_API_KEY = '&key=AIzaSyDJtAthqXsnVf3UDjofxy86v0H14hRMvCs';
  public static OPEN_WEATHER_API = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&units=metric';
  public static OPEN_WEATHER_API_CITY_EXISTS = 'http://api.openweathermap.org/data/2.5/weather?q={city}&mode=json&units=metric';
  public static OPEN_WEATHER_API_KEY = '&appid=eb8b1a9405e659b2ffc78f0a520b1a46';
  public static OPEN_WEATHER_API_NUMBER_OF_DAYS = 5;
}
