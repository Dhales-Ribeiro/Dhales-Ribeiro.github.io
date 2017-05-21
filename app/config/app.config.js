/**
 * Created by dhales on 30/12/16.
 */
'use strict';

/**
 * @ngdoc overview
 * @name DR
 * @description
 * # DR
 *
 * Módulo principal da aplicação.
 */

var application = angular.module("DR", ["ui.router", "ngMaterial"])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
                'default': '800',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '800'
            })
            .accentPalette('teal', {
                'default': '900',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '800'
            })
            .warnPalette('red', {
                'default': '900',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': 'A700'
            })
    }).run(function($rootScope){

        $rootScope
            .$on('$stateChangeStart',
                function(event, toState, toParams, fromState, fromParams){

                    var start = new Date();
                    var maxTime = 1000;
                    var timeoutVal = Math.floor(maxTime/100);
                    animateUpdate();

                    function updateProgress(percentage) {
                        
                        $('#pbar_innerdiv').css("width", percentage + "%");
                        $rootScope.percentage = percentage;
                    }

                    function animateUpdate() {
                        var now = new Date();
                        var timeDiff = now.getTime() - start.getTime();
                        var perc = Math.round((timeDiff/maxTime)*100);
                        if (perc <= 100) {
                            updateProgress(perc);
                            setTimeout(animateUpdate, timeoutVal);
                        }
                    }
                    $("#ui-view").html("");
                    $(".page-loading").removeClass("hidden");
                });

        $rootScope
            .$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams){
                    setTimeout(function(){
                        $(".page-loading").addClass("hidden");
                    }, 1000);
                });

    });