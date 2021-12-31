var add_motrice = document.getElementById('add_motrice');
var add_tgv_l = document.getElementById('add_tgv_l');
var add_tgv_r = document.getElementById('add_tgv_r');
var add_wagon = document.getElementById('add_wagon');
var add_wagon_bar = document.getElementById('add_wagon_bar');
var compo = document.getElementById('compo_area');


add_motrice.onclick = function() {
    var motrice = document.createElement('div');
    motrice.setAttribute('class', 'train-wagons-train-wagon train-loco');
    compo.appendChild(motrice);
}