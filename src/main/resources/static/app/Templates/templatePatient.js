'use strict';

angular.module('myApp.templatePatient', ['ngRoute'])

.controller('templatePatientCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient, $location) {

      $scope.continuePerfil=function(){
            $location.path("PatientProfile");
      };
      $scope.continueLogout=function(){
            $rootScope.logout();
      };
      $scope.continueHome=function(){
            $location.path("HomePatient");
      };
      
      $scope.continueCommentsFeedbacks=function(){
      	$location.path("CommentsViewFeedbacks");
      };
      $scope.continueCommentsAdvices=function(){
      	$location.path("CommentsViewAdvices");
      };
      $scope.continueCRegisterHeartHealth=function(){
            $location.path("ControlRegisterHeartHealth");
      };
      $scope.continueCViewHeartHealth=function(){
            $location.path("ControlViewHeartHealth");
      };
      $scope.continueCRegisterArmAngles=function(){
            $location.path("ControlRegisterArmAngles");
      };
      $scope.continueCViewArmAngles=function(){
            $location.path("ControlViewArmAngles");
      };
      $scope.continueCRegisterLegAngles=function(){
            $location.path("ControlRegisterLegAngles");
      };
      $scope.continueCViewLegAngles=function(){
            $location.path("ControlViewLegAngles");
      };
      $scope.continueCRegisterPhysicalActivities=function(){
            $location.path("ControlRegisterPhysicalActivities");
      };
      $scope.continueCViewPhysicalActivities=function(){
            $location.path("ControlViewPhysicalActivities");
      };
      $scope.continueCRegisterEscalaNHISS=function(){
            $location.path("ControlRegisterEscalaNHISS");
      };
      $scope.continueCViewEscalaNHISS=function(){
            $location.path("ControlViewEscalaNHISS");
      };
      $scope.continueSignalViewBloodOxygenSignal=function(){
            $location.path("/SignalViewBloodOxygenSignal");
      };
      $scope.continueSignalViewECGSignal=function(){
            $location.path("/SignalViewECGSignal");
      };
}]);
