export class YahooWeatherService {
  constructor($log, $http, $q) {
    'ngInject';
    this.$log = $log;
    this.$http = $http;
    this.$q = $q;
  }

  getForecast(cidade) {
    let deferred = this.$q.defer();
    if (angular.isDefined(cidade) && angular.isString(cidade)) {
      let query = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${cidade}") and u="c"&format=json`;
      let apiHost = `https://query.yahooapis.com/v1/public/yql?q=${query}`;
      this.$http.get(apiHost)
        .success((response) => {
          deferred.resolve(response.query.results.channel);
        })
        .error((error) => {
          deferred.reject(error.data);
        });
    }
    return deferred.promise;
  }
}
