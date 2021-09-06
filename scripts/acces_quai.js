const database = firebase.database().ref('users');

function loadQuais(userid, pairId, gid) {
    database.child(userid).child('gares').child(gid).child('trains').get().then((snapshot) => {
        var quais = new Array();
        snapshot.forEach((child) => {
            if (child.val().pairid === pairId) {
                quais.push({
                    id: child.key,
                    number: child.val().number,
                    destination: child.val().destination,
                    hour: child.val().hourdepart,
                    retard: child.val().ret,
                    type: child.val().type,
                    voie: child.val().voie
                });
            }
        });
    });
}