(function () {
  "use strict";

  angular.module("app").controller("lionsCtrl", function($scope, $http) {

    $scope.purpleHippo = "It's all about the spacing";
    $scope.peoples = [
      {name: "Tom Sawyer", text: "invented Roller Coaste Tycoon", visible: false},
      {name: "Rachel McMahem", text: "Did nothing her whole entire life.", visible: false},
      {name: "Mathew T'nali", text: "He always was a really nice guy.", visible: false}
    ]

    $scope.toggleVisible = function(person_in_peoples){
      person_in_peoples.visible = !person_in_peoples.visible;
    }

    $scope.addPerson = function(persons_name, persons_details){
      $scope.peoples.push({name: persons_name, text: persons_details, visible: false});
      $scope.newPerson = undefined;
      $scope.details = undefined;
    }

    $scope.deletePerson = function(person){
      $scope.peoples.splice(($scope.peoples.indexOf(person)), 1);
    }

    $scope.tasks = []
    $scope.addTask = function(newTask){
      if (newTask && $scope.tasks.indexOf(newTask) === -1){
    	   $scope.tasks.push({task_detail: newTask, completed: false});
          $scope.newTask = undefined;
        // $scope.tasks = $scope.tasks.sort();
      }
    }

    $scope.toggleComplete = function(task){
      task.completed = !task.completed;
    }

    $scope.completed = function(task){
      return !task.completed;
    }

    $scope.deleteTask = function(task){
      $scope.tasks.splice;

    }

    $scope.remaining = function(){
      var remaining = 0
      for(var i = 0; i < $scope.tasks.length; i++){
        if ($scope.tasks[i].completed){
          remaining ++;
        }
      }
      return remaining
    }

    // $scope.removeDeleted = function(){
    //   for(var i = 0; i < $scope.tasks.length; i++) {
    //     if ($scope.tasks[i].completed){
    //       $scope.tasks.splice($scope.tasks.indexOf($scope.tasks[i]), 1)
    //     } 
    //   }
    // }

    $scope.removeDeleted = function(){
      var recordDeleted = []
      for(var i = 0; i < $scope.tasks.length; i++) {
        if ($scope.tasks[i].completed){
          recordDeleted.push($scope.tasks[i]);
          // (indexOf($scope.tasks[i]))
        }
      }
      for(var i = 0; i < recordDeleted.length; i++){
        for(var j = 0; j < $scope.tasks.length; j++){
          if (recordDeleted[i] === $scope.tasks[j]){
            $scope.tasks.splice($scope.tasks.indexOf($scope.tasks[j]), 1);
          }
        }
      }
    }
    
    window.scope = $scope;
  });
})();