const database = firebase.database().ref('users');

var uid = firebase.auth().currentUser.uid;

function getAllUsers() {
    loadConfidentiality();
    database.get().then((snapshot) => {
        var i = 0;
        var j = 0;
        var row = document.createElement('div');
        row.setAttribute('class', 'row');
        snapshot.forEach((child) => {
            if (i == 3) {
                document.getElementById('cards').appendChild(row);
                document.getElementById('cards').appendChild(document.createElement('br'));
                if (j == 3) {
                    var ins = document.createElement('ins');
                    var script = document.createElement('script');
                    ins.setAttribute('class', 'adsbygoogle');
                    ins.setAttribute('style', 'display:inline-block;width:728px;height:90px');
                    ins.setAttribute('data-ad-client', 'ca-pub-3014614649994013');
                    ins.setAttribute('data-ad-slot', '9920869589');

                    script.innerText = '(adsbygoogle = window.adsbygoogle || []).push({});';

                    document.getElementById('cards').appendChild(ins);
                    document.getElementById('cards').appendChild(script);
                    j = 0;
                }
                row = document.createElement('div');
                row.setAttribute('class', 'row');
                i = 0;
                j++;
            }

            if (child.val().public) {
                var col = document.createElement('div');
                var card = document.createElement('div');
                var center = document.createElement('center');
                var photo = document.createElement('i');
                var username = document.createElement('h2');
                var gares = document.createElement('p');
                var content = document.createElement('div');

                card.setAttribute('class', 'card overflow-hidden');
                card.style.cursor = 'pointer';
                card.setAttribute('onclick', 'location.href="user.htm?id='+child.key+'";');

                col.setAttribute('class', 'col-md-4')

                content.setAttribute('class', 'card-body text-center');

                photo.setAttribute('class', 'icons-circle-account-connected icons-size-90px');

                center.appendChild(photo);

                username.innerText = child.val().username;

                gares.innerText = child.child('gares').numChildren() + ' gares';

                content.appendChild(username);
                content.appendChild(gares);

                card.appendChild(center);
                card.appendChild(content);

                col.appendChild(card);

                row.appendChild(col);
                
                i++;
            }
        });
        document.getElementById('loader').style.display = 'none';
    }).catch((error) => {
        document.getElementById('error_loading').hidden = false;
        document.getElementById('loader').style.display = 'none';
    })
}

function setUid(val) {
    uid = val;
}

function modifConfidentiality() {
    var profile_public = document.getElementById('public_yes').checked;

    database.child(uid).update({
        public: profile_public
    });
}

function loadConfidentiality() {
    database.child(uid).get().then((snapshot) => {
        document.getElementById('public_yes').checked = snapshot.val().public;
    });
}