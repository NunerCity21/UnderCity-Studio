$(document).ready(function() {
    $("#loginButton").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();

        if (username && password) {
            $("#username").val("");
            $("#password").val("");
            alert("Sorry, You Cannot Login At This Time. Please Browse As A Guest.");
        } else {
            alert("Please Fill Out Both The Username And Password Field To Continue.");
        }
    });

    $("#guestButton").click(function() {
        window.location.href = "../Home/home.html";
    });
});  