var contactsApp = angular.module('contactsApp',['ngMaterial','ngRoute']);


var contactList =  [
                        {
                            firstName: 'Jeremy',
                            lastName: 'Wagner',
                            phoneNum: 1534648981,
                            email: 'jeremywegner@email.gov',
                            isSelected: false,
                            id: 1
                        },
                        {
                            firstName: 'Sally',
                            lastName: 'Green',
                            phoneNum: 7879894458,
                            email: 'sallygrn@lala.land',
                            isSelected: false,
                            id: 2
                        }
                ];
var idcount = 3;
var tempContact = {
                        firstName: '',
                        lastName: '',
                        phoneNum: -1,
                        email: '',
                        id: -1
                    }

contactsApp.config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/form', {
        templateUrl: 'pages/contactform.html',
        controller: 'mainController'
    })
    .otherwise( {
        retdirectTo: 'pages/home.html',

    })
});


contactsApp.controller('mainController', function($scope,filterFilter,$mdDialog,$location){
    $scope.contactList = contactList;
    $scope.tempFirst;
    $scope.tempLast;
    $scope.tempPhone;
    $scope.tempEmail;
    $scope.selectedContacts = [];

    $scope.addNewContact = function(ev){



        if($scope.tempFirst == null|| $scope.tempLast == null || $scope.tempPhone == null || $scope.tempEmail == null || $scope.tempFirst == ''|| $scope.tempLast == '' || $scope.tempPhone == '' || $scope.tempEmail == '' ){
            alert("All fields are required to fill out")
        }else{

            contactList.push(
                {
                    firstName: $scope.tempFirst,
                    lastName: $scope.tempLast,
                    phoneNum: $scope.tempPhone,
                    email: $scope.tempEmail,
                    id: idcount
                }
            );
            idcount++;
            alert("Contact successfully added!")
            $location.path(ev)
        }

    };

    $scope.toggle = function(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {

           list.splice(idx, 1);
         }
         else {

           list.push(item);
         }
    };


      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

      $scope.removeContacts = function() {
        contactList = contactList.filter(function(contact){
            return !contact.id == '1';
        });
      }

    $scope.count = idcount;
})
