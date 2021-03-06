
angular.module('school_erp')
    .controller("addWordController", ['$http', '$scope', '$window', 'ngDialog', 'schoolEventsServices', 'globalServices', 'studentServices', function ($http, $scope, $window, ngDialog, schoolEventsServices, globalServices, studentServices) {








        $scope.addQuote = function () {
            console.log("message");
            var Details = {
                quote: $scope.data.quote,
                // chapter_name: $scope.data.chapter_name,
                word: $scope.data.word,
                quoteWritten:$scope.data.quoteWritten,
                wordWritten:$scope.data.wordWritten
            }
            schoolEventsServices.setQuote(Details)
                .success(function (data, status) {
                    ngDialog.open({
                        template: '<p>Quote are sended.</p>',
                        plain: true
                    });
                    $scope.data = [];



                })
                .error(function (data, success) {
                })
        }


        $scope.getQuotes = function () {

            schoolEventsServices.getQuote()
                .success(function (data, status) {
                      console.log(JSON.stringify(data));
                    $scope.quotes = data.Quotes; // Api list-name
                    // $scope.quoteforday = $scope.quotes[0].quote;
                    // quoteWritten=$scope.quotes[0]
                    // $scope.wordforday = $scope.quotes[0].word;

                })
                .error(function (data, success) { })
        }

        // Role based Display
        $scope.showRole = function (role) {
            return globalServices.fetchRoleAuth(role);
        }
        $scope.getQuotes(); 
    }])