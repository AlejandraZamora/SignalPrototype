'use strict';

angular.module('myApp.ControlViewEscalaNHISS', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlViewEscalaNHISS', {
    templateUrl: 'ControlViewEscalaNHISS/ControlViewEscalaNHISS.html',
    controller: 'ControlViewEscalaNHISSCtrl'
  });
}])

.controller('ControlViewEscalaNHISSCtrl', ['$rootScope', '$scope', 'patient', function ($rootScope, $scope, patient) {
    patient.get({patientId:""+$rootScope.idPatient})
    .$promise.then(
            //success
            function( value ){
                $scope.patient=value;
                $scope.diagnostics=$scope.patient.escalaNHISS;
$scope.synthomsBegin=[];
$scope.nivelDeConciencia=[];
$scope.ordenesMotoras=[];
$scope.miradaConjugada=[];
$scope.camposVisuales=[];
$scope.paresiaFacial=[];
$scope.paresiaDeBrazoIzquierdo=[];
$scope.paresiaDeBrazoDerecho=[];
$scope.paresiaDePiernaIzquierda=[];
$scope.paresiaDePiernaDerecha=[];
$scope.ataxiaDeLasExtremidades=[];
$scope.sensibilidad=[];
$scope.lenguaje=[];
$scope.disartria=[];
$scope.extincionNegligenciaInatencion=[];
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
