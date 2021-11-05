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

function getAllVersions() {
    var req = new XMLHttpRequest();
    req.open('GET', COMMITS_API);
    req.onload = ((e) => {
        var response = JSON.parse(req.response);
        response.forEach(element => {
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            let p = document.createElement('p');

            var title = element.commit.message.split('\n')[0];
            var message = element.commit.message.slice(0, title.length - 1);
            var commit_date = new Date(element.commit.author.date);

            h1.innerText = `${message[0]} (${commit_date})`;
            p.innerText = message;
            div.appendChild(h1);
            div.appendChild(p);

            document.getElementById('versions').appendChild(div);
        });
    });
}