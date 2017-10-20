'use strict';

angular.module('myApp.HomePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomePatient', {
    templateUrl: 'HomePatient/HomePatient.html',
    controller: 'HomePatientCtrl'
  });
}])

.controller('HomePatientCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient,$location) {

      patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientH=value;
                        $scope.commentsHFeedbacks=$scope.patientH.feedbacks;
                        if (typeof $scope.commentsHFeedbacks == "undefined"){
                            $scope.recomendacionesHFeedbacks="No tienes ninguna recomendacion sobre Feedbacks";
                            $scope.cantHFeedbacks=undefined;
                        }
                        if(typeof $scope.commentsHFeedbacks != "undefined"){
                            $scope.recomendacionesHFeedbacks="Comentarios sobre Feedbacks de tu medico!!";
                            $scope.cantHFeedbacks=$scope.commentsHFeedbacks.length;
                        }
                        $scope.commentsHAdvices=$scope.patientH.advices;
                        if (typeof $scope.commentsHAdvices == "undefined"){
                            $scope.recomendacionesHAdvices="No tienes ninguna recomendacion sobre Advices";
                            $scope.cantHAdvices=undefined;
                        }
                        if(typeof $scope.commentsHAdvices != "undefined"){
                            $scope.recomendacionesHAdvices="Comentarios sobre Advices de tu medico!!";
                            $scope.cantHAdvices=$scope.commentsHAdvices.length;
                        }

						$scope.diagnosticsHHeartHealth=$scope.patientH.heartHealth;
                            $scope.systolicPressureHeartHealth=[];
                            $scope.diastolicPressureHeartHealth=[];
                            $scope.bloodCholesterolHeartHealth=[];
                            $scope.heartRateHeartHealth=[];
						$scope.labelsHeartHealth=[];
						$scope.seriesHeartHealth = ['Datos de Control HeartHealth'];
						for(var n=0; n<$scope.diagnosticsHHeartHealth.length; n++){
							var dd=$scope.diagnosticsHHeartHealth[n];
	                            $scope.systolicPressureHeartHealth.push(dd.systolicPressure);
	                            $scope.diastolicPressureHeartHealth.push(dd.diastolicPressure);
	                            $scope.bloodCholesterolHeartHealth.push(dd.bloodCholesterol);
	                            $scope.heartRateHeartHealth.push(dd.heartRate);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsHeartHealth.push(dated);
						}
						$scope.diagnosticsHArmAngles=$scope.patientH.armAngles;
                            $scope.upperAngleArmAngles=[];
                            $scope.lowerAngleArmAngles=[];
						$scope.labelsArmAngles=[];
						$scope.seriesArmAngles = ['Datos de Control ArmAngles'];
						for(var n=0; n<$scope.diagnosticsHArmAngles.length; n++){
							var dd=$scope.diagnosticsHArmAngles[n];
	                            $scope.upperAngleArmAngles.push(dd.upperAngle);
	                            $scope.lowerAngleArmAngles.push(dd.lowerAngle);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsArmAngles.push(dated);
						}
						$scope.diagnosticsHLegAngles=$scope.patientH.legAngles;
                            $scope.upperAngleLegAngles=[];
                            $scope.lowerAngleLegAngles=[];
						$scope.labelsLegAngles=[];
						$scope.seriesLegAngles = ['Datos de Control LegAngles'];
						for(var n=0; n<$scope.diagnosticsHLegAngles.length; n++){
							var dd=$scope.diagnosticsHLegAngles[n];
	                            $scope.upperAngleLegAngles.push(dd.upperAngle);
	                            $scope.lowerAngleLegAngles.push(dd.lowerAngle);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsLegAngles.push(dated);
						}
						$scope.diagnosticsHPhysicalActivities=$scope.patientH.physicalActivities;
                            $scope.seriesNumberPhysicalActivities=[];
						$scope.labelsPhysicalActivities=[];
						$scope.seriesPhysicalActivities = ['Datos de Control PhysicalActivities'];
						for(var n=0; n<$scope.diagnosticsHPhysicalActivities.length; n++){
							var dd=$scope.diagnosticsHPhysicalActivities[n];
	                            $scope.seriesNumberPhysicalActivities.push(dd.seriesNumber);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsPhysicalActivities.push(dated);
						}
						$scope.diagnosticsHEscalaNHISS=$scope.patientH.escalaNHISS;
						$scope.labelsEscalaNHISS=[];
						$scope.seriesEscalaNHISS = ['Datos de Control EscalaNHISS'];
						for(var n=0; n<$scope.diagnosticsHEscalaNHISS.length; n++){
							var dd=$scope.diagnosticsHEscalaNHISS[n];
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsEscalaNHISS.push(dated);
						}
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
$scope.continueCSFeedbacks=function(){
	          	$location.path("CommentsViewFeedbacks");
	          	};
$scope.continueCSAdvices=function(){
	          	$location.path("CommentsViewAdvices");
	          	};
}]);
