function SignIn() {
  var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
  let form = document.createElement('form');
  form.setAttribute('method', 'GET')
  form.setAttribute('action', oauth2Endpoint)
  
  // alert("cleck")
  let params = {
    "client_id": "490009917900-3oboafpmio292r5gg99ie7nod4bgrkpg.apps.googleusercontent.com",
    "redirect_uri": "http://127.0.0.1:5500/redirect.html",
    "response_type": "token",
    "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube",
    "include_granted_scopes": "true",
    'state': "pass-through-value"
  }

  for (var p in params) {
    let input = document.createElement("input");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    input.setAttribute("type", "hidden"),
      form.appendChild(input)
  }

  document.body.appendChild(form);
  form.submit()
}

