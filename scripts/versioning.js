const COMMITS_API = "https://api.github.com/repos/Absolument-Oui/InfoGare-Beta/commits";

function getVersion() {
    var req = new XMLHttpRequest();
    req.open('GET', COMMITS_API);
    req.onload = ((e) => {
        var response = JSON.parse(req.response);
        var item = response[0];
        var message = item.commit.message;
        console.log(message);
        var version = message.split('\n');

        document.getElementById('version').innerText = version[0];
    });
    req.send('');
}