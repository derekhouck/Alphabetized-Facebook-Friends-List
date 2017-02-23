$(document).ready(function() {
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '1881323855483967',
        version: 'v2.8'
      });     
      $('#loginbutton,#feedbutton').removeAttr('disabled');
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    });
    $.fn.createList = function() {
    }
    $("#loginButton").click(function() {
        if (typeof FB !== "undefined") {
          FB.getLoginStatus(function(response) {
              if (response.status === 'connected') {
                  FB.logout(function(response) {
                      $("#loginButton").text("Login with Facebook");
                      $("h1").text("Alphabetized Facebook Friends List");
                  });
              } else {
                  FB.login(function(response) {
                      statusChangeCallback(response);
                  }, {scope: 'user_friends'});
              }
          });
        } else {
            alert("Cannot reach Facebook right now.");
        }
    });
});

// This is called with the results from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response is returneed with a status field that lets the
    // app know the current login status of the person.
    if (response.status === 'connected') {
        loginEvents(response);
        $("#status").hide();
    } else if (response.status === 'not_authorized') {
        $("#status").text("Please authorize this app.").show();
    } else {
        $("#status").text("Please login with Facebook.").show();
    }
}
function loginEvents(response) {
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
    FB.api('/me', function(response) {
        $("h1").append(" for " + response.name);
    });
    FB.api('/me/taggable_friends', {
      access_token : accessToken
    },
      function(response) {
          console.log(response);
    });
    $("#loginButton").text("Logout");
}
