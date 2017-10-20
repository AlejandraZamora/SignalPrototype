'use strict';

angular.module('myApp.templateInvestigator', ['ngRoute'])


.controller('templateInvestigatorCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
	
	  $scope.continuePerfil=function(){
            $location.path("InvestigatorProfile");
      };
      $scope.continueLogoutI=function(){
            $rootScope.logout();
      };
      $scope.continueHomeI=function(){
            $location.path("HomeInvestigator");
      };
	$scope.continueRegistersIHeartHealth=function(){
	        $location.path("RegistersInvestigatorViewHeartHealth");
	  };
	$scope.continueRegistersIArmAngles=function(){
	        $location.path("RegistersInvestigatorViewArmAngles");
	  };
	$scope.continueRegistersILegAngles=function(){
	        $location.path("RegistersInvestigatorViewLegAngles");
	  };
	$scope.continueRegistersIPhysicalActivities=function(){
	        $location.path("RegistersInvestigatorViewPhysicalActivities");
	  };
	$scope.continueRegistersIEscalaNHISS=function(){
	        $location.path("RegistersInvestigatorViewEscalaNHISS");
	  };
}]);
