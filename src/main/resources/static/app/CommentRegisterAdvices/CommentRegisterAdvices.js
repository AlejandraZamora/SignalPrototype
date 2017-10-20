'use strict';

angular.module('myApp.CommentRegisterAdvices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentRegisterAdvices', {
    templateUrl: 'CommentRegisterAdvices/CommentRegisterAdvices.html',
    controller: 'CommentRegisterAdvicesCtrl'
  });
}])

.controller('CommentRegisterAdvicesCtrl', ['$rootScope', '$scope', 'patient','patients','$http','$resource', '$location', function ($rootScope, $scope, patient, patients, $http, $resource, $location) {
        $scope.title=null;
$scope.instructions=null;
$scope.priority=null;
        $scope.date=new Date();
        $scope.pId=$rootScope.patientId;
        $scope.foundC=$rootScope.FindID;
        $scope.saveComment= function(){
            $scope.comment={"date":$scope.date
            ,"instructions":$scope.instructions
            ,"priority":$scope.priority
             ,"title":$scope.title};
            patient.get({patientId:""+$scope.pId})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.principal=value;
                        $scope.principal.advices.push($scope.comment);
                        patients.update($scope.principal)
                        .$promise.then(
                            //success
                            function(value){
                                $location.path("CommentsDoctorViewAdvices");
                            },
                            //error
                            function( error ){
                                console.log("No se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("Identificador no se encuentra registrado");
                    }
            );
        };
}]);
