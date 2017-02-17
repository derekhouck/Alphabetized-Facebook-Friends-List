$(document).ready(function() {
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '1881323855483967',
        version: 'v2.8'
      });     
      $('#loginbutton,#feedbutton').removeAttr('disabled');
        FB.getLoginStatus(updateStatusCallback);
    });
    $.fn.createList = function() {
    }
    $("#loginButton").click(function() {
        if (typeof FB !== "undefined") {
          FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                FB.api('/me', function(response) {
                    $("h1").append(" for " + response.name);
                });
                FB.api('/me/friends', {
                  access_token : accessToken
                },
                  function(response) {
                      console.log(response);
                });
            }
            else {
              FB.login();
            }
          });
        } else {
            alert("Cannot reach Facebook right now.");
        }
    });
});
