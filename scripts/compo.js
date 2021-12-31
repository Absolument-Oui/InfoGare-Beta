var add_motrice = document.getElementById('add_motrice');
var add_tgv_l = document.getElementById('add_tgv_l');
var add_tgv_r = document.getElementById('add_tgv_r');
var add_wagon = document.getElementById('add_wagon');
var add_wagon_bar = document.getElementById('add_wagon_bar');
var compo = document.getElementById('compo_area');

var compo_list = [];


add_motrice.onclick = function() {
    var motrice = document.createElement('div');
    motrice.setAttribute('class', 'train-wagons-train-wagon train-loco');
    motrice.onclick = function() {
        compo.removeChild(motrice);
        writeCompo();
    }
    writeCompo();
    compo.appendChild(motrice);
}

add_tgv_l.onclick = function() {
    var tgv = document.createElement('div');
    tgv.setAttribute('class', 'train-wagons-train-wagon train-tgv-l');
    tgv.onclick = function() {
        compo.removeChild(tgv);
        writeCompo();
    }
    writeCompo();
    compo.appendChild(tgv);
}

add_tgv_r.onclick = function() {
    var tgv = document.createElement('div');
    tgv.setAttribute('class', 'train-wagons-train-wagon train-tgv-r');
    tgv.onclick = function() {
        compo.removeChild(tgv);
        writeCompo();
    }
    writeCompo();
    compo.appendChild(tgv);
}

add_wagon.onclick = function() {
    var wagon = document.createElement('div');
    wagon.setAttribute('class', 'train-wagons-train-wagon train-wagon');
    wagon.onclick = function() {
        compo.removeChild(wagon);
        writeCompo();
    }
    writeCompo();
    compo.appendChild(wagon);
}

add_wagon_bar.onclick = function() {
    var wagon = document.createElement('div');
    wagon.setAttribute('class', 'train-wagons-train-wagon train-wagon-bar');
    wagon.onclick = function() {
        compo.removeChild(wagon);
        writeCompo();
    }
    writeCompo();
    compo.appendChild(wagon);
}

function writeCompo() {
    compo_list = [];
    $('#compo_compo').children('.train-wagons-train-wagon').each(function() {
        var classList = $(this).attr('class');
        console.log(classList);
        compo_list.push(classList[1]);
    });
}