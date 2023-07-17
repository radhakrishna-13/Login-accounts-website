let id = document.querySelector(".id")
let name = document.querySelector(".name")
let image = document.querySelector(".image")
let email = document.querySelector(".email");
let data = document.querySelector(".data");

// data.style.display = "none";

function onSignIn(googleUser) {
    data.style.display = "block";
    var profile = googleUser.getBasicProfile();
    id.innerHTML = `<p>Id = ${profile.getId()}</p>`
    name.innerHTML = `<p>Name = ${profile.getName()}</p>`
    image.innerHTML = `<p>Image URL = ${profile.getImageUrl()}</p>`
    email.innerHTML = `<p>Email = ${profile.getEmail()}</p>`
    // console.log('ID: ' + ); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + );
    // console.log('Image URL: ' + );
    // console.log('Email: ' + ); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert('User signed out.');
      data.style.display = "none";
    });
  }