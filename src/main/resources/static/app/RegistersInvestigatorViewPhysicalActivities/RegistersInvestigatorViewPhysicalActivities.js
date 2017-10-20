'use strict';

angular.module('myApp.RegistersInvestigatorViewPhysicalActivities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewPhysicalActivities', {
    templateUrl: 'RegistersInvestigatorViewPhysicalActivities/RegistersInvestigatorViewPhysicalActivities.html',
    controller: 'RegistersInvestigatorViewPhysicalActivitiesCtrl'
  });
}])

.controller('RegistersInvestigatorViewPhysicalActivitiesCtrl', ['patient', 'patients', '$rootScope', '$scope', function (patient, patients, $rootScope, $scope) {
     patients.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.patientsList=value;
$scope.seriesNumber=[];
//1
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio PhysicalActivities'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.patientsList.length; i++) {
                        if($scope.patientsList[i].physicalActivities.length >= 1){
                            $scope.patientAct=$scope.patientsList[i];
                            $scope.labels.push($scope.patientAct.id);
var seriesNumberInitial=0;
                            for(var n=0; n<$scope.patientAct.physicalActivities.length; n++){
                                var dd=$scope.patientAct.physicalActivities[n];
seriesNumberInitial=seriesNumberInitial+dd.seriesNumber;
$scope.principalAndDiagnostic.push([$scope.patientAct.id, $scope.patientAct.name
, dd.exerciseName
, dd.seriesNumber
, dd.date
]);
                            }
$scope.seriesNumber.push(seriesNumberInitial/$scope.patientAct.physicalActivities.length);
                            
                            $scope.diagnostics.push($scope.patientsList[i].physicalActivities[0]);
                        }
                    }
seriesNumber
seriesNumberInitial=0;
                    for(var j = 0; j < $scope.seriesNumber.length; j++) {
seriesNumberInitial=seriesNumberInitial+$scope.seriesNumber[j];
                    }
                    $scope.todoData=[];
$scope.todoData.push(seriesNumberInitial/$scope.seriesNumber.length);
					$scope.todoLabels=[
'SeriesNumber'
//0
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
