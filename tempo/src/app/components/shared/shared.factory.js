export class SharedFactory {
  constructor($localStorage, yahooWeather) {
    'ngInject';
    this.$yahooWeather = yahooWeather;
    this.$localStorage = $localStorage;
    this.objectToShare;
  }

  setFavorite() {
    if (angular.isDefined(this.objectToShare)) {
      this.$localStorage.favorite = this.objectToShare;
    }
  }

  getObjectToShare() {
    if (angular.isDefined(this.$localStorage.favorite) && angular.isUndefined(this.objectToShare)) {
      return this.$localStorage.favorite
    }
    return this.objectToShare;
  }

  setObjectToShare(objectToShare) {
    if (angular.isDefined(objectToShare) && angular.isDefined(objectToShare.searchValue)) {
      this.$yahooWeather.getForecast(objectToShare.searchValue).then((itens) => {
        this.objectToShare = itens;
        this.setFavorite();
      });
    } else {
      this.$localStorage.favorite = undefined;
      this.objectToShare = undefined;
    }
  }
}
