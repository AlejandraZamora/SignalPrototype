'use strict';

angular.module('myApp.RegistersInvestigatorViewHeartHealth', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewHeartHealth', {
    templateUrl: 'RegistersInvestigatorViewHeartHealth/RegistersInvestigatorViewHeartHealth.html',
    controller: 'RegistersInvestigatorViewHeartHealthCtrl'
  });
}])

.controller('RegistersInvestigatorViewHeartHealthCtrl', ['patient', 'patients', '$rootScope', '$scope', function (patient, patients, $rootScope, $scope) {
     patients.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.patientsList=value;
$scope.systolicPressure=[];
//1
$scope.diastolicPressure=[];
//2
$scope.bloodCholesterol=[];
//3
$scope.heartRate=[];
//4
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio HeartHealth'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.patientsList.length; i++) {
                        if($scope.patientsList[i].heartHealth.length >= 1){
                            $scope.patientAct=$scope.patientsList[i];
                            $scope.labels.push($scope.patientAct.id);
var systolicPressureInitial=0;
var diastolicPressureInitial=0;
var bloodCholesterolInitial=0;
var heartRateInitial=0;
                            for(var n=0; n<$scope.patientAct.heartHealth.length; n++){
                                var dd=$scope.patientAct.heartHealth[n];
systolicPressureInitial=systolicPressureInitial+dd.systolicPressure;
diastolicPressureInitial=diastolicPressureInitial+dd.diastolicPressure;
bloodCholesterolInitial=bloodCholesterolInitial+dd.bloodCholesterol;
heartRateInitial=heartRateInitial+dd.heartRate;
$scope.principalAndDiagnostic.push([$scope.patientAct.id, $scope.patientAct.name
, dd.systolicPressure
, dd.diastolicPressure
, dd.bloodCholesterol
, dd.heartRate
, dd.date
]);
                            }
$scope.systolicPressure.push(systolicPressureInitial/$scope.patientAct.heartHealth.length);
$scope.diastolicPressure.push(diastolicPressureInitial/$scope.patientAct.heartHealth.length);
$scope.bloodCholesterol.push(bloodCholesterolInitial/$scope.patientAct.heartHealth.length);
$scope.heartRate.push(heartRateInitial/$scope.patientAct.heartHealth.length);
                            
                            $scope.diagnostics.push($scope.patientsList[i].heartHealth[0]);
                        }
                    }
systolicPressure
systolicPressureInitial=0;
diastolicPressure
diastolicPressureInitial=0;
bloodCholesterol
bloodCholesterolInitial=0;
heartRate
heartRateInitial=0;
                    for(var j = 0; j < $scope.heartRate.length; j++) {
systolicPressureInitial=systolicPressureInitial+$scope.systolicPressure[j];
diastolicPressureInitial=diastolicPressureInitial+$scope.diastolicPressure[j];
bloodCholesterolInitial=bloodCholesterolInitial+$scope.bloodCholesterol[j];
heartRateInitial=heartRateInitial+$scope.heartRate[j];
                    }
                    $scope.todoData=[];
$scope.todoData.push(systolicPressureInitial/$scope.systolicPressure.length);
$scope.todoData.push(diastolicPressureInitial/$scope.diastolicPressure.length);
$scope.todoData.push(bloodCholesterolInitial/$scope.bloodCholesterol.length);
$scope.todoData.push(heartRateInitial/$scope.heartRate.length);
					$scope.todoLabels=[
'SystolicPressure'
,
//3
'DiastolicPressure'
,
//2
'BloodCholesterol'
,
//1
'HeartRate'
//0
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
