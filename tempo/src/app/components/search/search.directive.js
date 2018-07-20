import {SearchController} from "./search.controller";

export function SearchDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    controller: SearchController,
    controllerAs: 'vm',
    templateUrl: 'app/components/search/search.html'
  };

  return directive;
}
