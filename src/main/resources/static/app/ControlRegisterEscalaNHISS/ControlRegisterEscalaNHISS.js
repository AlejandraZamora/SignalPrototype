'use strict';

angular.module('myApp.ControlRegisterEscalaNHISS', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterEscalaNHISS', {
    templateUrl: 'ControlRegisterEscalaNHISS/ControlRegisterEscalaNHISS.html',
    controller: 'ControlRegisterEscalaNHISSCtrl'
  });
}])

.controller('ControlRegisterEscalaNHISSCtrl', ['$rootScope', '$scope', 'patients','patient','$http','$resource', '$location', function ($rootScope, $scope, patients,patient, $http, $resource, $location) {
		$scope.date=null;
		$scope.synthomsBegin=null;
		$scope.nivelDeConciencia=null;
		$scope.ordenesMotoras=null;
		$scope.miradaConjugada=null;
		$scope.camposVisuales=null;
		$scope.paresiaFacial=null;
		$scope.paresiaDeBrazoIzquierdo=null;
		$scope.paresiaDeBrazoDerecho=null;
		$scope.paresiaDePiernaIzquierda=null;
		$scope.paresiaDePiernaDerecha=null;
		$scope.ataxiaDeLasExtremidades=null;
		$scope.sensibilidad=null;
		$scope.lenguaje=null;
		$scope.disartria=null;
		$scope.extincionNegligenciaInatencion=null;
		
		$scope.nivelDeConcienciaOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Alerta'},
		//0
		{id: '1', name: 'Somnolencia'},
		//1
		{id: '2', name: 'Obnubilacion'},
		//2
		{id: '3', name: 'Coma'}
		//3
		]
		};
		$scope.ordenesMotorasOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Ambas respuestas son correctas'},
		//0
		{id: '1', name: 'Una respuesta correcta'},
		//1
		{id: '2', name: 'Ninguna respuesta correcta'}
		//2
		]
		};
		$scope.miradaConjugadaOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Paresia parcial de la mirada'},
		//1
		{id: '2', name: 'Paresia total o desviacion forzada'}
		//2
		]
		};
		$scope.camposVisualesOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Hemianopsia parcial'},
		//1
		{id: '2', name: 'Hemianopsia completa'},
		//2
		{id: '3', name: 'Ceguera bilateral'}
		//3
		]
		};
		$scope.paresiaFacialOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Paresia leve (asimetria al sonreir)'},
		//1
		{id: '2', name: 'Paralisis total de musculo facial superior e inferior'}
		//2
		]
		};
		$scope.paresiaDeBrazoIzquierdoOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Mantiene la posición 10 min'},
		//0
		{id: '1', name: 'Claudica en menos de 10 min sin llegar a tocar la cama'},
		//1
		{id: '2', name: 'Claudica y toca la cama en menos de 10 min'},
		//2
		{id: '3', name: 'Hay movimiento pero no vence gravedad'},
		//3
		{id: '4', name: 'Paralisis completa'},
		//4
		{id: '5', name: 'Extremidad amputada o inmovilizada. No puntua'}
		//5
		]
		};
		$scope.paresiaDeBrazoDerechoOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Mantiene la posición 10 min'},
		//0
		{id: '1', name: 'Claudica en menos de 10 min sin llegar a tocar la cama'},
		//1
		{id: '2', name: 'Claudica y toca la cama en menos de 10 min'},
		//2
		{id: '3', name: 'Hay movimiento pero no vence gravedad'},
		//3
		{id: '4', name: 'Paralisis completa'},
		//4
		{id: '5', name: 'Extremidad amputada o inmovilizada. No puntua'}
		//5
		]
		};
		$scope.paresiaDePiernaIzquierdaOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Mantiene la posición 5 min'},
		//0
		{id: '1', name: 'Claudica en menos de 5 min sin llegar a tocar la cama'},
		//1
		{id: '2', name: 'Claudica y toca la cama en menos de 5 min'},
		//2
		{id: '3', name: 'Hay movimiento pero no vence gravedad'},
		//3
		{id: '4', name: 'Paralisis completa'},
		//4
		{id: '5', name: 'Extremidad amputada o inmovilizada. No puntua'}
		//5
		]
		};
		$scope.paresiaDePiernaDerechaOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Mantiene la posición 5 min'},
		//0
		{id: '1', name: 'Claudica en menos de 5 min sin llegar a tocar la cama'},
		//1
		{id: '2', name: 'Claudica y toca la cama en menos de 5 min'},
		//2
		{id: '3', name: 'Hay movimiento pero no vence gravedad'},
		//3
		{id: '4', name: 'Paralisis completa'},
		//4
		{id: '5', name: 'Extremidad amputada o inmovilizada. No puntua'}
		//5
		]
		};
		$scope.ataxiaDeLasExtremidadesOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Ataxia en una extremidad'},
		//1
		{id: '2', name: 'Ataxia en dos extremidades'}
		//2
		]
		};
		$scope.sensibilidadOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Leve o moderada hipoestesia'},
		//1
		{id: '2', name: 'Anestesia'}
		//2
		]
		};
		$scope.lenguajeOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Afasia leve o moderada'},
		//1
		{id: '2', name: 'Afasia grave, no posible entenderse'},
		//2
		{id: '3', name: 'Afasia global o en coma'}
		//3
		]
		};
		$scope.disartriaOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Leve, se le puede entender'},
		//1
		{id: '2', name: 'Grave, ininteligible o anartria'},
		//2
		{id: '3', name: 'Intubado. No puntúa'}
		//3
		]
		};
		$scope.extincionNegligenciaInatencionOpt = {
		availableOptions: [
		//
		{id: '0', name: 'Normal'},
		//0
		{id: '1', name: 'Inatencion/extincion en una modalidad'},
		//1
		{id: '2', name: 'Inatencion/extincion en más de una modalidad'}
		//2
		]
		};
		
		
		
		
		

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "synthomsBegin":$scope.synthomsBegin
, "nivelDeConciencia":$scope.nivelDeConciencia
, "ordenesMotoras":$scope.ordenesMotoras
, "miradaConjugada":$scope.miradaConjugada
, "camposVisuales":$scope.camposVisuales
, "paresiaFacial":$scope.paresiaFacial
, "paresiaDeBrazoIzquierdo":$scope.paresiaDeBrazoIzquierdo
, "paresiaDeBrazoDerecho":$scope.paresiaDeBrazoDerecho
, "paresiaDePiernaIzquierda":$scope.paresiaDePiernaIzquierda
, "paresiaDePiernaDerecha":$scope.paresiaDePiernaDerecha
, "ataxiaDeLasExtremidades":$scope.ataxiaDeLasExtremidades
, "sensibilidad":$scope.sensibilidad
, "lenguaje":$scope.lenguaje
, "disartria":$scope.disartria
, "extincionNegligenciaInatencion":$scope.extincionNegligenciaInatencion
            };
            patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientT=value;
                        $scope.patientT.escalaNHISS.push($scope.diagnostic);
                        patients.update($scope.patientT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.patientT.escalaNHISS);
                                $location.path("HomePatient");
                            },
                            //error
                            function( error ){
                                console.log("El patient no se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
        };
}]);
