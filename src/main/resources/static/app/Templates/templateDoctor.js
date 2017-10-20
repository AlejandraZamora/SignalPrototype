'use strict';

angular.module('myApp.templateDoctor', ['ngRoute'])

.controller('templateDoctorCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient, $location) {
		
		$scope.continuePerfil=function(){
              $location.path("DoctorProfile");
         };
		
      $scope.continueLogoutD=function(){
            $rootScope.logout();
      };
      $scope.continueHomeD=function(){
            $location.path("HomeDoctor");
      };
      $scope.continueRegistersPHeartHealth=function(){
      		$location.path("RegisterDoctorViewHeartHealth");
      };
      $scope.continueRegistersPArmAngles=function(){
      		$location.path("RegisterDoctorViewArmAngles");
      };
      $scope.continueRegistersPLegAngles=function(){
      		$location.path("RegisterDoctorViewLegAngles");
      };
      $scope.continueRegistersPPhysicalActivities=function(){
      		$location.path("RegisterDoctorViewPhysicalActivities");
      };
      $scope.continueRegistersPEscalaNHISS=function(){
      		$location.path("RegisterDoctorViewEscalaNHISS");
      };
      $scope.continueViewBloodOxygenSignal=function(){
      		$location.path("/DoctorSignalViewBloodOxygenSignal");
      };
      $scope.continueViewECGSignal=function(){
      		$location.path("/DoctorSignalViewECGSignal");
      };
$scope.continueCommentRegisterFeedbacks=function(){
        $location.path("CommentRegisterFeedbacks");
  };
  $scope.continueCommentViewFeedbacks=function(){
        $location.path("CommentsDoctorViewFeedbacks");
  };
$scope.continueCommentRegisterAdvices=function(){
        $location.path("CommentRegisterAdvices");
  };
  $scope.continueCommentViewAdvices=function(){
        $location.path("CommentsDoctorViewAdvices");
  };
}]);
