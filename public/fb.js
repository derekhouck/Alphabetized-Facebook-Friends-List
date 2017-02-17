$(document).ready(function() {
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '1881323855483967',
        version: 'v2.8'
      });     
      $('#loginbutton,#feedbutton').removeAttr('disabled');
      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          console.log('Logged in.');
          var uid = response.authResponse.userID;
          var accessToken = response.authResponse.accessToken;
          console.log(accessToken);
          FB.api('/me', {
            access_token : accessToken
          },
            function(response) {
            $("h1").append(" for " + response.name);
          });
        }
        else {
          FB.login();
        }
      });
    });
});
