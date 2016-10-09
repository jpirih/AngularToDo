// main module registration 
angular.module('frello', []);

// tasks controller 
angular.module('frello').controller('tasksController', function ($scope){
    $scope.tasks = [ 
        {
            name: 'Nanosi drva',
            done: false
        },
        {
            name: 'Obrni sir',
            done: false
        },
        {
            name: 'Posesaj',
            done: false
        }
    ];
    $scope.addTask = function(task){
        $scope.tasks.push({ name: task, done:false });
    }
    
    	
    
    
}); 