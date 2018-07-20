export function config ($logProvider, $mdThemingProvider) {
  'ngInject';
  $logProvider.debugEnabled(true);
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('light-blue');

}
