'use strict';

angular.module('myApp.SignalViewBloodOxygenSignal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SignalViewBloodOxygenSignal', {
    templateUrl: 'SignalViewBloodOxygenSignal/SignalViewBloodOxygenSignal.html',
    controller: 'SignalViewBloodOxygenSignalCtrl'
  });
}])

.controller('SignalViewBloodOxygenSignalCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient, $location) {
    
    var chart;


    $scope.$on('$locationChangeSuccess', function( event ) {
        disconnect();
        chart.destroy();
        dps.length=0;
        inSignalPage=false;
    });
    
     
    var dps = []; // dataPoints
    var inSignalPage = true;
    var frequencyLoaded = false;
    

    chart = new CanvasJS.Chart("chartContainer",{
        title :{
            text: "BloodOxygen Signal"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }],
        //Desactivadas por cuestiones de rendimiento
        animationEnabled: false,
        interactivityEnabled: false,
        axisY:{
            //El titulo del eje
            title: "Amplitud",
            //limites a mostrar
            minimum : 800,
            maximum : 1300
        },
        axisX:{
            //El titulo del eje
            title: "Tiempo (s)",
            //Cada cuanto se mostrara indicador en eje X
            interval: 1
        }
    });
   
    var yVal = -1;
    var xVal=0;
    var actValue=null;
    var updateInterval = 0.004; //El intervalo de actualizacion
    var dataLength = 1000; // number of dataPoints visible at any point
    
    var stompClient = null;
    function setConnected(connected) {
        $("#connect").prop("disabled", connected);
        $("#disconnect").prop("disabled", !connected);
        if (connected) {
            $("#conversation").show();
        }
        else {
            $("#conversation").hide();
        }
        $("#greetings").html("");
    }

    function connect() {
        var socket = new SockJS('/signal-out-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            setConnected(true);
            //console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/BloodOxygensignaltoclient', function (greeting) {
                if(JSON.parse(greeting.body).pId===$scope.patient.id){
                    //Se captura el SignalValue para solicitar la frecuencia
                    if((JSON.parse(greeting.body)).value){
                        actValue=greeting;
                        yVal=parseInt(JSON.parse(greeting.body).value);
                    }
                    //Se calcula demora entre muestra dependiendo de la frecuencia de las senales
                    if(!frequencyLoaded){
                        if((JSON.parse(greeting.body)).frequency){
                            updateInterval=1/(parseInt(JSON.parse(greeting.body).frequency));
                            frequencyLoaded=true;
                        }
                    }
                }
            });
        });
    }
    //Se inicia conexion con servidor en WebSocket
    connect();
    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        //console.log("Disconnected");
    }
    
    patient.get({patientId:""+$rootScope.idPatient})
    .$promise.then(
            //success
            function( value ){
                $scope.patient=value;
                var showSample=0;
                //Inicio de codigo en hilo diferente (Para delay de muestreo)
                var worker = new Worker('SignalViewBloodOxygenSignal/WebSocketWorker.js');
                worker.postMessage(updateInterval*1000);
                worker.onmessage = function (event) {
                    if(!frequencyLoaded){
                        if(actValue){
                            stompClient.send("/app/frequencyBloodOxygen/"+$scope.patient.id, {}, JSON.stringify(actValue));
                        }else{
                            stompClient.send("/app/beginBloodOxygen/"+$scope.patient.id);
                        }
                    }else if(frequencyLoaded){
                        if(dps.length===0){
                            for(var l=0;l<dataLength; l++){
                                dps.push({x: xVal, y: yVal});
                                xVal=xVal+updateInterval;
                            }
                        }
                        stompClient.send("/app/beginBloodOxygen/"+$scope.patient.id);
                    }
                    xVal=xVal+updateInterval;
                    dps.push({x: xVal, y: yVal});
                    while (dps.length > dataLength){
                        dps.shift();
                    }
                    //El grafico se muestra cada tres senales por cuestion de rendimiento
                    if(showSample>2){
                        showSample=0;
                        chart.render();
                    }
                    showSample++;
                    if(inSignalPage){
                        worker.postMessage(updateInterval*1000);
                    }
                };
            },
            //error
            function( error ){
                alert("Error");
            }
    );
}]);
