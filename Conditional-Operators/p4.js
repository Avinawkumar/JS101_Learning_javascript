 // Given stored username and password and input username and password, Print if the user can login or not.

let stored_user = "avi@gmail.com";
let stored_pass = "avi123";

//for login
let user = "avi@gmail.com";
let pass = "avi321";

if (stored_user == user) {

  if (stored_pass == pass) {
    console.log("Login Sucessfull");
  } else {
    console.log("Incorrect Password");
  }
  
} else {
  console.log("Wrong credentials");
}