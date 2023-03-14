function logoutMe(){
    $('#registerMenu').show();
    $('#loginMenu').show();
    $('#logoutMenu').hide();
    $('#ProfileMenu').hide();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    $('#byebyeModal').modal('show');

    console.log("logout")
   
}