firebase.auth().languageCode = 'fr';

var user = undefined;

document.getElementById('login_btn').onclick = function() {
  location.href = 'https://auth.infogare.fr/login.htm?returnurl=' + encodeURIComponent(location.href)+'&service=infogare&version=beta';
}

function loginWithToken(token) {
  firebase.auth().signInWithCustomToken(token).then((user) => {
    console.log(user.user.displayName);
    window.location.href = location.pathname;
  });
}

function checkLogin() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        document.getElementById('mnu_login').hidden = true;
        document.getElementById('mnu_gares').hidden = false;
        document.getElementById('mnu_compte').hidden = false;
        document.getElementById('mnu_username').innerText = user.displayName;
        document.getElementById('mnu_users').hidden = false;
        document.getElementById('mnu_logout').hidden = false;
        if (location.host === 'beta.infogare.fr') {
          checkBeta(user.uid);
        }
        this.user = user;
      } else {
        document.getElementById('mnu_login').hidden = false;
        document.getElementById('mnu_gares').hidden = true;
        document.getElementById('mnu_compte').hidden = true;
        document.getElementById('mnu_username').innerText = 'Non connecté';
        document.getElementById('mnu_users').hidden = true;
        document.getElementById('mnu_logout').hidden = true;
        if (location.host === 'beta.infogare.fr') {
          checkBeta(user.uid);
        }
      }
    });
}

function logout() {
    firebase.auth().signOut().then(() => {
      window.location.href="index.htm";
    }).catch((error) => {
      console.error(error.message);
    });
}

function checkBeta(userid) {
  firebase.database().ref('users/'+userid).get().then((snapshot) => {
    if (!snapshot.val().beta) {
      logout();
      window.location.replace('beta_access_refused.htm');
    }
  })
}