'use strict';

angular.module('myApp.RegistersInvestigatorViewEscalaNHISS', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewEscalaNHISS', {
    templateUrl: 'RegistersInvestigatorViewEscalaNHISS/RegistersInvestigatorViewEscalaNHISS.html',
    controller: 'RegistersInvestigatorViewEscalaNHISSCtrl'
  });
}])

.controller('RegistersInvestigatorViewEscalaNHISSCtrl', ['patient', 'patients', '$rootScope', '$scope', function (patient, patients, $rootScope, $scope) {
     patients.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.patientsList=value;
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio EscalaNHISS'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.patientsList.length; i++) {
                        if($scope.patientsList[i].escalaNHISS.length >= 1){
                            $scope.patientAct=$scope.patientsList[i];
                            $scope.labels.push($scope.patientAct.id);
                            for(var n=0; n<$scope.patientAct.escalaNHISS.length; n++){
                                var dd=$scope.patientAct.escalaNHISS[n];
$scope.principalAndDiagnostic.push([$scope.patientAct.id, $scope.patientAct.name
, dd.date
, dd.synthomsBegin
, dd.nivelDeConciencia
, dd.ordenesMotoras
, dd.miradaConjugada
, dd.camposVisuales
, dd.paresiaFacial
, dd.paresiaDeBrazoIzquierdo
, dd.paresiaDeBrazoDerecho
, dd.paresiaDePiernaIzquierda
, dd.paresiaDePiernaDerecha
, dd.ataxiaDeLasExtremidades
, dd.sensibilidad
, dd.lenguaje
, dd.disartria
, dd.extincionNegligenciaInatencion
]);
                            }
                            
                            $scope.diagnostics.push($scope.patientsList[i].escalaNHISS[0]);
                        }
                    }
                    $scope.todoData=[];
					$scope.todoLabels=[
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
