
angular.module('school_erp', ['ui.router','720kb.datepicker', 'ngDialog', 'zingchart-angularjs', 'htmlToPdfSave', 'xeditable', 'ui.calendar', 'ui.bootstrap','anguFixedHeaderTable','smart-table','ngProgress','base64'])
  .run(function ($rootScope, $state, authService) {
    $rootScope.loginPage = false;
    $rootScope.role = 'teacher';
   

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

      var requireLogin = toState.data.requireLogin;
      if (requireLogin && authService.getUserInfo() == null) {
        $rootScope.authenticated = false;
        event.preventDefault();
        return $state.go("login");
      }

    });
  });

