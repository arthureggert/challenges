import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {YahooWeatherService} from '../app/components/weather/yahoo-weather.service';
import {SharedFactory} from '../app/components/shared/shared.factory';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {SearchDirective} from '../app/components/search/search.directive';

angular.module('tempo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ngMaterial', 'googlechart', 'ngStorage'])
  .constant('_', window._) // eslint-disable-line
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .service('yahooWeather', YahooWeatherService)
  .service('shared', SharedFactory)
  .directive('navbar', NavbarDirective)
  .directive('search', SearchDirective);
