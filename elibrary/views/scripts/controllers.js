'use strict';

  angular.module('confusionApp').controller('MenuController', ['$scope','menuFactory', function($scope, menuFactory) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;
  $scope.showMenu = false;
  $scope.message = "Loading ...";
      
      $scope.dishes = menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
      );
    

  

  $scope.select = function(setTab) {
    $scope.tab = setTab;
    
    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } 
    else if (setTab === 3) {
      $scope.filtText = "mains";
    }
    else if (setTab === 4) {
      $scope.filtText = "dessert";
    }
    else {
      $scope.filtText = "";
    }
  };
    $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
};
  
  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };
}])
  
        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
                        
                        $scope.showDish = false;
                        $scope.message="Loading ...";
                        
            
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)})
            .$promise.then(
                            function(response){
                                $scope.dish = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
            );
                       
                    }])

  
  
  .controller('ContactController', ['$scope', function($scope) {
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                                }])
  
  
      
      .controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {
                       
          $scope.feedback = { mychannel:"", firstName:"", lastName:"", email:"", tel:{areaCode:"", number:""} , comments:"", agree:false };
          
          $scope.sendFeedback = function() {
                                
                    console.log($scope.feedback);
                    if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) { $scope.invalidChannelSelection = true;
                        console.log('incorrect');
                    }
                    else {
                    $scope.invalidChannelSelection = false;
                   
                    
                    
                     

                    feedbackFactory.getFeedback().save($scope.feedback);
                    
                   
                    
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", email:"", tel:{areaCode:"", number:""}, comments:"", agree:false };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            
                
                // Step 3: Push your comment into the dish's comment array
               
                 
                
                
                                
                    
                //Step 4: reset your JavaScript object that holds your comment
                
                    
                    
                    
               
            
                        
                        
                        
                        
                        
                        };
          
          
          
          
          
        }])
  
  
  
     .controller('DishCommentController', ['$scope', 'menuFactory', function($scope,menuFactory) {
         
        $scope.Var="five";
         
         
         
         
         
            
            //Step 1: Create a JavaScript object to hold the comment from the form
         $scope.rev = { rating:"", comment:"", author:"" , date:""};
            
        
        $scope.One = function() {
            
            $scope.rev.rating="1";
            
        };
         
         $scope.Two = function() {
            
            $scope.rev.rating="2";
            
        };
         
         $scope.Three = function() {
            
            $scope.rev.rating="3";
            
        };
         
         $scope.Four = function() {
            
            $scope.rev.rating="4";
            
        };
         
         $scope.Five = function() {
            
            $scope.rev.rating="5";
            
        };
         
            $scope.submitComment = function () {
                
                //Step 2: This is how you record the date
                $scope.rev.date = new Date().toISOString();
               
               console.log($scope.rev);
                
                // Step 3: Push your comment into the dish's comment array
               
                $scope.dish.comments.push($scope.rev); 
                
                
                                
                    menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
                //Step 4: reset your JavaScript object that holds your comment
                
                    
                    
                    
                //Step 5: reset your form to pristine
                    $scope.commentForm.$setPristine();
                $scope.rev = { rating:"", comment:"", author:"", date:""};
                    console.log($scope.rev);
                
                
                
               
                                

                
                               
                
                
            };
         
                
               
            
        }])
  
  // implement the IndexController and About Controller here

  
  .controller('AboutController', ['$scope', '$stateParams', 'corporateFactory', function($scope, $stateParams, corporateFactory) {
                        
                       $scope.showChef = false;
                       $scope.showLeaders = false;
                       $scope.message="Loading ...";
                       
                        
      
                        $scope.leads = corporateFactory.getLeaders().query(
                        function(response) {
                            $scope.leads = response;
                            $scope.showLeaders = true;
                        },
                        function(response) {
                            $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        );
      
      
                        $scope.specialist = corporateFactory.getLeaders().get({id:3})
                        .$promise.then(
                            function(response){
                                $scope.specialist = response;
                                $scope.showChef = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        )
                        ;
                        
                        
      
                          
                    }])
  
   .controller('IndexController', ['$scope', '$stateParams', 'menuFactory',  function($scope, $stateParams, menuFactory) {
                        
                        
                       $scope.showDish = false;
                       $scope.message="Loading ...";
                       $scope.showPromots = false;
       
                       
                        
                       $scope.promots = menuFactory.getPromotion().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.promots = response;
                                $scope.showPromots = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        )
                        ;
       
                        
       
                        $scope.lipsmacking = menuFactory.getDishes().get({id:0})
                        .$promise.then(
                            function(response){
                                $scope.lipsmacking = response;
                                $scope.showDish = true;
                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }
                        )
                        ;

                                          
       
                       
      
                          
                    }])
  
  ;