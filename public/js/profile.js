function showProfile() {
  $('#userProfileModal').modal('show');
  var profileInfo = new XMLHttpRequest();
  profileInfo.open("post", "http://127.0.0.1:8080/verify", true);
  profileInfo.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  profileInfo.onload = function () {
    user_array = JSON.parse(profileInfo.responseText);

    document.getElementById("p-username").textContent = user_array[0].username;
    document.getElementById("p-email").textContent = user_array[0].email;
  }
  var username = sessionStorage.getItem("token")
  var payload = { 'username': username }
  profileInfo.send(JSON.stringify(payload))
}

function editProfile() {
  $('#editProfileModal').modal('show');
  var profileDetail = new XMLHttpRequest();
  profileDetail.open("post", "http://127.0.0.1:8080/verify", true);
  profileDetail.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  profileDetail.onload = function () {
    user_array = JSON.parse(profileDetail.responseText);
    genderId = user_array[0].gender
    document.getElementById("e-username").value = user_array[0].username;
    document.getElementById("e-email").value = user_array[0].email;
    document.getElementById("e-first_name").value = user_array[0].first_name;
    document.getElementById("e-last_name").value = user_array[0].last_name;
    document.getElementById(genderId).checked = true;
    document.getElementById("e-password").value = user_array[0].password;
    document.getElementById("e-address").value = user_array[0].address;
    document.getElementById("e-mobile_number").value = user_array[0].mobile_number;
  }
  var username = sessionStorage.getItem("token")
  var payload = { 'username': username }
  profileDetail.send(JSON.stringify(payload))
}

function confirmEditProfile() {
  if (confirm("Are you sure you want to edit your personal information?") == true) {
    
    editProfile_url = "http://127.0.0.1:8080/users/" + user_array[0]._id

    var updatingProfile = new XMLHttpRequest();
    updatingProfile.open("put", editProfile_url, true);
    updatingProfile.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    updatingProfile.onload = function () {
      user_array = JSON.parse(updatingProfile.responseText);
      console.log(user_array)
      if (user_array.code == "ER_DUP_ENTRY") { 
        $('#editProfileModal').modal('hide');
        $('#userProfileModal').modal('hide');
        $('#failModal').modal('show');
        alert("that Email and(or) Username has been already taken :/")
      }
      else if(user_array.code == "ER_BAD_NULL_ERROR"){
        $('#editProfileModal').modal('hide');
        $('#userProfileModal').modal('hide');
        $('#failModal').modal('show');
        alert("Please fill in all the information.")
      }
      else {
        $('#editProfileModal').modal('hide');
        $('#userProfileModal').modal('hide');
        $('#successModal').modal('show');
        alert("Successfully updated!")
        sessionStorage.setItem("token", username)
      }

    }
    var email = document.getElementById("e-email").value;
    var username = document.getElementById("e-username").value;
    var first_name = document.getElementById("e-first_name").value;
    var last_name = document.getElementById("e-last_name").value;
    var gender = e_displayRadioValue();
    var password = document.getElementById("e-password").value;
    var address = document.getElementById("e-address").value;
    var mobile_number = document.getElementById("e-mobile_number").value;
    var payload = {
      email: email, username: username, first_name: first_name, last_name: last_name, gender: gender,
      password: password, address: address, mobile_number: mobile_number
    }
    updatingProfile.send(JSON.stringify(payload))

  }
  else {
    console.log("not changed")
  }
}

function e_displayRadioValue() {
  var ele = document.getElementsByName('e-gender');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
}

function editProfilePicture(){
  
}
