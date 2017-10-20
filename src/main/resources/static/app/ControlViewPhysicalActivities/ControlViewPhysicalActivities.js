'use strict';

angular.module('myApp.ControlViewPhysicalActivities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlViewPhysicalActivities', {
    templateUrl: 'ControlViewPhysicalActivities/ControlViewPhysicalActivities.html',
    controller: 'ControlViewPhysicalActivitiesCtrl'
  });
}])

.controller('ControlViewPhysicalActivitiesCtrl', ['$rootScope', '$scope', 'patient', function ($rootScope, $scope, patient) {
    patient.get({patientId:""+$rootScope.idPatient})
    .$promise.then(
            //success
            function( value ){
                $scope.patient=value;
                $scope.diagnostics=$scope.patient.physicalActivities;
$scope.exerciseName=[];
$scope.seriesNumber=[];
				$scope.diagnosticsNew=[];
                $scope.labels=[];
                $scope.series = ['Datos de Control'];
                $scope.diagnostics.orderByDate("date", -1);
				$scope.currentDate=new Date();
                for(var n=0; n<$scope.diagnostics.length; n++){
                    var dd=$scope.diagnostics[n];
                    var datee=new Date(dd.date);
                    if(datee >= ($scope.currentDate.setDate($scope.currentDate.getDate()-14))){
                    	$scope.diagnosticsNew.push(dd);
$scope.seriesNumber.push(dd.seriesNumber);
	                    var datee=new Date(dd.date);
	                    var dia = datee.getDate();
	                    var mes = parseInt(datee.getMonth()) + 1;
	                    var year = datee.getFullYear();
	                    var dated=dia+"/"+mes+"/"+year;
	                    $scope.labels.push(dated);
                    }else{
						break;
					}
                }
            },
            //error
            function( error ){
                alert("Error");
            }
    );
	Array.prototype.orderByDate=function(p,so){
	  if(so!=-1&&so!=1)so=1;
	  this.sort(function(a,b){
	    var da=new Date(a[p]),db=new Date(b[p]);
	    return(da-db)*so;
	  })
	};
}]);
