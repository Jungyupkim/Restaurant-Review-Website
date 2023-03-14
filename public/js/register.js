

function registerMe() {
    var registerUser = new XMLHttpRequest();

    registerUser.open("Post", "http://127.0.0.1:8080/users", true);
    registerUser.setRequestHeader("Content-Type", "application/json");
    registerUser.onload = function() {
        user_array = JSON.parse(registerUser.responseText);
        console.log(user_array)
        if (user_array.code == "ER_DUP_ENTRY") { 
            $('#registerModal').modal('hide');
            $('#failModal').modal('show');
            alert("that Email and(or) Username has been already taken :/")
        }
        else if(user_array.code == "ER_BAD_NULL_ERROR"){
            $('#registerModal').modal('hide');
            $('#failModal').modal('show');
            alert("Please fill in all the information.")
        }
        else {
            $('#registerModal').modal('hide');
            $('#successModal').modal('show');
            alert("Successfully Registered!")
        }
    }
    var email = document.getElementById("r-email").value;
    var username = document.getElementById("r-username").value;
    var first_name = document.getElementById("r-first_name").value;
    var last_name = document.getElementById("r-last_name").value;
    var gender = r_displayRadioValue();
    var password = document.getElementById("r-password").value;
    var address = document.getElementById("r-address").value;
    var mobile_number = document.getElementById("r-mobile_number").value;
    var payload = {
        email: email, username: username, first_name: first_name, last_name: last_name, gender: gender,
        password: password, address: address, mobile_number: mobile_number
    }
    registerUser.send(JSON.stringify(payload))


}
function r_displayRadioValue() {
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            return ele[i].value;
        }
    }
}
