angular.module('livroDePontoApp.serviceServer', []).
    factory('sockectFecther', function ($rootScope) {

        /*
            This is where you fetch data from the server through the socket.io and pass it to the controller
        */

        var socket = io.connect();

        return {
          on: function (eventName, callback) {
            socket.on(eventName, function () {
              var args = arguments;
              $rootScope.$apply(function () {
                callback.apply(socket, args);
              });
            });
          },
          
          emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
              var args = arguments;
              $rootScope.$apply(function () {
                if (callback) {
                  callback.apply(socket, args);
                }
              });
            })
          }
        };


    });
