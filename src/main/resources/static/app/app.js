'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.CommentsDoctorViewFeedbacks',
  'myApp.CommentRegisterFeedbacks',
  'myApp.CommentsViewFeedbacks',
  'myApp.RegistersInvestigatorViewHeartHealth',
  'myApp.RegisterDoctorViewHeartHealth',
  'myApp.ControlRegisterHeartHealth',
  'myApp.ControlViewHeartHealth',
  'myApp.RegistersInvestigatorViewArmAngles',
  'myApp.RegisterDoctorViewArmAngles',
  'myApp.ControlRegisterArmAngles',
  'myApp.ControlViewArmAngles',
  'myApp.RegistersInvestigatorViewLegAngles',
  'myApp.RegisterDoctorViewLegAngles',
  'myApp.ControlRegisterLegAngles',
  'myApp.ControlViewLegAngles',
  'myApp.RegistersInvestigatorViewPhysicalActivities',
  'myApp.RegisterDoctorViewPhysicalActivities',
  'myApp.ControlRegisterPhysicalActivities',
  'myApp.ControlViewPhysicalActivities',
  'myApp.CommentsDoctorViewAdvices',
  'myApp.CommentRegisterAdvices',
  'myApp.CommentsViewAdvices',
  'myApp.RegistersInvestigatorViewEscalaNHISS',
  'myApp.RegisterDoctorViewEscalaNHISS',
  'myApp.ControlRegisterEscalaNHISS',
  'myApp.ControlViewEscalaNHISS',
  'myApp.SignalViewBloodOxygenSignal',
  'myApp.DoctorSignalViewBloodOxygenSignal',
  'myApp.SignalViewECGSignal',
  'myApp.DoctorSignalViewECGSignal',
  'myApp.templateDoctor',
  'myApp.HomePatient',
  'myApp.UpdatePatient',
  'myApp.PatientProfile',
  'myApp.DoctorProfile',
  'myApp.InvestigatorProfile',
  'myApp.templateInvestigator',
  'myApp.templatePatient',
  'myApp.Login',
  'myApp.Register',
  'myApp.HomeInvestigator',
  'myApp.PatientAutorization',
  'myApp.HomeDoctor',
  'myApp.version',
  'services.factory',
  'chart.js'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Login'});
}]);

