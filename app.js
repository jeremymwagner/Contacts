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
                        },
                        {
                            firstName: 'Al',
                            lastName: 'Spotts',
                            phoneNum: 7482671398,
                            email: 'alspot@kewl.com',
                            isSelected: false,
                            id: 3
                        },
                        {
                            firstName: 'Bruce',
                            lastName: 'Sandal',
                            phoneNum: 2498789123,
                            email: 'bsand@beach.ball',
                            isSelected: false,
                            id: 4
                        },
                        {
                            firstName: 'Jennifer',
                            lastName: 'Carson',
                            phoneNum: 4429067894,
                            email: 'jcar@nas.car',
                            isSelected: false,
                            id: 5
                        },
                        {
                            firstName: 'Stephanie',
                            lastName: 'Bagel',
                            phoneNum: 9874482398,
                            email: 'sbahel@cream.cheese',
                            isSelected: false,
                            id: 6
                        }
                ];
var idcount = 7;

//
// Routing for all of the pages. The view being injected to is the entire page
//
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


contactsApp.controller('mainController', function($scope,$filter,$mdDialog,$location){
    $scope.contactList = contactList;
    $scope.tempFirst;
    $scope.tempLast;
    $scope.tempPhone;
    $scope.tempEmail;
    $scope.selectedContacts = [];

//
//  Function to take the inputs of the contact form and add them to the array of contacts as an object
//
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


//
// Function to push a contact that has been checked to the selected array for futher manipulation
//
    $scope.toggle = function(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {

           list.splice(idx, 1);
         }
         else {

           list.push(item);
         }
    };


//
//  Test function to determine whether or not the contact is in the array of contacts
//
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

//
//  Function to remove all contacts that have been checked
//
      $scope.removeContacts = function() {
         var selectStop = $scope.selectedContacts.length
         var contactStop = $scope.contactList.length

         while($scope.selectedContacts.length != 0){
             var i = $scope.selectedContacts[0]
             for(var j = 0;j < $scope.contactList.length;j++){
                 if(i.id == $scope.contactList[j].id){
                     $scope.contactList.splice(j,1)
                     $scope.selectedContacts.splice(0,1)
                 }
             }
         }

      }

      $scope.filterBy = function(x){
          $scope.myFilterBy = x
      }

    $scope.count = idcount;
})
