console.log("Home Page");

const adminDetails = [
    {
        userName:"admin",
        password:"admin1234"
    }
];

const userDetails = [
    {
        userName:"user",
        password:"user1234"
    }
];

loadAdminLoginForm = () =>{
    document.getElementById("admin_login_dialog_box").style.display = "block";
}

loadUserLoginForm = () =>{
    document.getElementById("user_login_dialog_box").style.display = "block";
}

checkAdminDetails =() =>{
    let inputAdminName = document.getElementById("txt_admin_username").value;
    let inputAdminPassword = document.getElementById("txt_admin_password").value;

    console.log(inputUserName);
    console.log(inputPassword);

    for (let index = 0; index < adminDetails.length; index++) {
        var tempDetails = adminDetails[index];

        if (tempDetails.userName === inputAdminName && tempDetails.password === inputAdminPassword) {
            document.getElementById("login_error_message").style.display = "none";
            window.open("/User/admin_page.html","_self")
        }else{
            document.getElementById("login_error_message").style.display = "block";
            document.getElementById("txt_admin_password").value = null;
        }
    }  
}

checkUserInputDetails =() =>{
    let inputUserName = document.getElementById("txt_user_username").value;
    let inputUserPassword = document.getElementById("txt_user_password").value;


    for (let index = 0; index < userDetails.length; index++) {
        var tempDetails = userDetails[index];

        if (tempDetails.userName === inputUserName && tempDetails.password === inputUserPassword) {
            document.getElementById("login_error_message").style.display = "none";
            window.open("/User/user_page.html","_self")
        }else{
            document.getElementById("user_login_error_message").style.display = "block";
            document.getElementById("txt_user_password").value = null;
        }
    }  
}

//alert("ADMIN- -> UserName : admin  Password : admin1234 /n USER - > UserName : user  Password : user1234" );