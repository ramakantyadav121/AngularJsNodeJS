angular.module('userModule', [])
        .controller('userController', ['$scope', 'authenticationService',
            function ($scope, authenticationService) {
                authenticationService.checkAuthentication();
                $scope.data = {name:"rama", role: "admin"};
                $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
               fees:500,
               
               subjects:[
                  {name:'Physics',marks:70, student: "vjhhj"},
                  {name:'Chemistry',marks:80, student: "jbhh"},
                  {name:'Math',marks:65,student: "hbn"},
                  {name:'English',marks:75, student: "jbhv"},
                  {name:'Hindi',marks:67, student: "fullName"},
                  {name:'Physics',marks:70, student: "vjhhj"},
                  {name:'Chemistry',marks:80, student: "jbhh"},
                  {name:'Math',marks:65,student: "hbn"},
                  {name:'English',marks:75, student: "jbhv"},
                  {name:'Hindi',marks:67, student: "fullName"},
                  {name:'Physics',marks:70, student: "vjhhj"},
                  {name:'Chemistry',marks:80, student: "jbhh"},
                  {name:'Math',marks:65,student: "hbn"},
                  {name:'English',marks:75, student: "jbhv"},
                  {name:'Hindi',marks:67, student: "fullName"},
                  {name:'Physics',marks:70, student: "vjhhj"},
                  {name:'Chemistry',marks:80, student: "jbhh"},
                  {name:'Math',marks:65,student: "hbn"},
                  {name:'English',marks:75, student: "jbhv"},
                  {name:'Hindi',marks:67, student: "fullName"}
               ],
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
                
                //resize table size on resize window size
                $(window).resize(function () {
                    var height = $(window).height();
                    $('#tableId').height(height - 155);
                });
                $('#tableId').height($(window).height() - 155);
            }]);

