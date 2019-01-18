angular.module('livroDePontoApp.livroDePontoCtrl', []).
controller('livroDePontoCtrl', function ($scope, sockectFecther) {

  $scope.filterData = undefined;
  $scope.dataTeachers = {};

  // fecth all the students of this class
  sockectFecther.on('allStudents', function (data) {
    $scope.students = data;
    console.log(data);
  });

  // fetch the subjects data of this class
  sockectFecther.on('turmaInfo', function (data) {
    $scope.subjects = data;
    console.log(data);
  });

  // fetch the subjects data of teachers
  sockectFecther.on('teacherDetails', function (data) {

    for (let teacher of data) {
      $scope.dataTeachers[teacher['disciplina_nome']] = teacher;
      continue; // prevent this attribute from collecting other data
    }

    console.log($scope.dataTeachers);

  });


});
