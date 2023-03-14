
//login_url = "http://127.0.0.1:8080/users" + "/" + _id;



function loginMe() {
    var verifyUsername = new XMLHttpRequest();

    verifyUsername.open("post", "http://127.0.0.1:8080/verify", true);
    verifyUsername.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    verifyUsername.onload = function () {
        user_array = JSON.parse(verifyUsername.responseText);
        console.log(user_array)
        if(user_array.length==1){
            loginMe2()
        }
        else{
            $('#loginModal').modal('hide');
            $('#failModal').modal('show');
            alert("username not found!");
        }
        

    }
    var username = document.getElementById("l-username").value;
    var payload = { 'username': username}
    verifyUsername.send(JSON.stringify(payload))
    


}
function loginMe2() {
    var loginUser = new XMLHttpRequest();

    loginUser.open("post", "http://127.0.0.1:8080/login", true);
    loginUser.setRequestHeader("Content-Type", "application/json");
    loginUser.onload = function () {
        user_array = JSON.parse(loginUser.responseText)
    
        if(user_array.length === 1){
            $('#loginModal').modal('hide');
            $('#successModal').modal('show');
            setTimeout(alert.bind(null, "Welcome "+user_array[0].username+"!"))
            document.getElementById("registerMenu").style.display="none";
            document.getElementById("loginMenu").style.display="none";
            document.getElementById("logoutMenu").style.display="block";
            document.getElementById("ProfileMenu").style.display="block";
            
            sessionStorage.setItem("token", user_array[currentIndex].username); 
            sessionStorage.setItem("userId", user_array[currentIndex]._id); 
        }
        else{
            $('#loginModal').modal('hide');
            $('#failModal').modal('show');
            alert("Invalid Password! Please try again");
        }
        

    }
    var password = document.getElementById("l-password").value;
    var payload = { _id: user_array[0]._id, password: password }
    loginUser.send(JSON.stringify(payload))


}

