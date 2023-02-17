import React, { Component } from 'react';
import $ from 'jquery';
<<<<<<< HEAD

class DepartsAFLPage extends Component {
=======
import { get, getDatabase, query, orderByChild, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { createRoot } from 'react-dom/client';
import RowDepartAFL from './RowDepartAFL';

class DepartsAFLPage extends Component {
    constructor(props) {
        super(props);

        this.titleRef = React.createRef();
        this.logoRef = React.createRef();
        this.rowsRef = React.createRef();
    }

>>>>>>> 07df4752334b4bb0c9a6b97805f2e5785e1f0c30
    render() {
        return(
            <div className='rows-afl'>
                <div className='rows-head'>
                    <div className='text-time'>
                        <span id='clock-hours'>00</span>
                        <div className='clock-blink'>:</div>
                        <span id='clock-minutes'>00</span>
                    </div>
<<<<<<< HEAD
                    <div className='title'>Metz-ville</div>
                    <div className='logo'></div>
=======
                    <div className='title' ref={this.titleRef}></div>
                    <div className='logo' ref={this.logoRef}></div>
>>>>>>> 07df4752334b4bb0c9a6b97805f2e5785e1f0c30
                </div>
                <div className='rows'>
                    <div className='row-top'>
                        <div className='col-first'></div>
                        <div className='col-second'>N°</div>
                        <div className='col-third'>DESTINATION</div>
                    </div>
<<<<<<< HEAD
                    <div className='row'>
                        <div className='row-first'>
                            <div className='col-first'>18:15</div>
                            <div className='col-second'>TER</div>
                            <div className='col-third'>Nancy</div>
                            <div className='col-fourth'>supprimé</div>
                        </div>
                        <div className='row-second'>
                            <div className='col-first'></div>
                            <div className='col-second'>837505</div>
                            <div className='col-third'>
                                <div className='gares text-scroll-x'>
                                    <div className='gare'>Pagny-sur-Moselle</div>
                                    <div className='gare'>Pont-à-Mousson</div>
                                    <div className='gare'>Nancy-Ville</div>
                                </div>
                            </div>
                        </div>
                        <div className='row-third'>
                            <div className='col-first'></div>
                            <div className='col-second'>Défaut de matériel</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='row-first'>
                            <div className='col-first'>18:20</div>
                            <div className='col-second'>TER</div>
                            <div className='col-third'>Luxembourg</div>
                            <div className='col-fourth'></div>
                        </div>
                        <div className='row-second'>
                            <div className='col-first'></div>
                            <div className='col-second'>837507</div>
                            <div className='col-third'>
                                <div className='gares text-scroll-x'>
                                    <div className='gare'>Hagondange</div>
                                    <div className='gare'>Uckange</div>
                                    <div className='gare'>Thionville</div>
                                    <div className='gare'>Bettembourg</div>
                                    <div className='gare'>Howald</div>
                                    <div className='gare'>Luxembourg</div>
                                </div>
                            </div>
                        </div>
                        <div className='row-third'>
                            <div className='col-first'></div>
                            <div className='col-second'></div>
                        </div>
                    </div>
                    <div className='row'></div>
=======
                    <div id="rows"></div>
>>>>>>> 07df4752334b4bb0c9a6b97805f2e5785e1f0c30
                </div>
                <div className='rows-foot'></div>
            </div>
        );
    }

    scrollX() {

<<<<<<< HEAD
        $('.text-scroll-x').each(function () {
=======
        $('.afl-text-scroll-x').each(function () {
>>>>>>> 07df4752334b4bb0c9a6b97805f2e5785e1f0c30

            var distance = $(this).width() + $(this).parent().width() + 10;


            if ($(this).width() > $(this).parent().width()) {
                $(this).addClass('animation-scroll-x');
                $(this).css({
                    '-webkit-animation-duration': (distance / 200) + 's',
                    'animation-duration': (distance / 200) + 's',
                    'padding-left': '100%'
                });
            } else {
                $(this).css({
                    'padding-left': '0%'
                });
            }
        });
    }

    componentDidMount() {
<<<<<<< HEAD
=======
        const db = getDatabase();
        const uid = getAuth().currentUser.uid;
        const id = this.props.id;
        const trains = query(ref(db, 'users/' + uid + '/gares/' + id + '/trains'), orderByChild('hourdepart'));
        get(ref(db, 'users/' + uid + '/gares/' + id)).then(data => {
            const elements = [];
            var i = 0;
            this.titleRef.current.innerHTML = data.child('name').val();
            if (data.child('logo').val() === 'TER') {
                this.logoRef.current.classList.add('train-card-ter');
            } else if (data.child('logo').val() === 'TER Alsace') {
                this.logoRef.current.classList.add('train-card-ter-alsace');
            } else if (data.child('logo').val() === 'TER Aquitaine') {
                this.logoRef.current.classList.add('train-card-ter-aquitaine');
            } else if (data.child('logo').val() === 'TER Auvergne') {
                this.logoRef.current.classList.add('train-card-ter-auvergne');
            } else if (data.child('logo').val() === 'TER Basse-Normandie') {
                this.logoRef.current.classList.add('train-card-ter-basse-normandie');
            } else if (data.child('logo').val() === 'TER Bourgogne') {
                this.logoRef.current.classList.add('train-card-ter-bourgogne');
            } else if (data.child('logo').val() === 'TER Bretagne') {
                this.logoRef.current.classList.add('train-card-ter-bretagne');
            } else if (data.child('logo').val() === 'TER Centre') {
                this.logoRef.current.classList.add('train-card-ter-centre');
            } else if (data.child('logo').val() === 'TER Franche Comte') {
                this.logoRef.current.classList.add('train-card-ter-franche-comte');
            } else if (data.child('logo').val() === 'TER Fluo') {
                this.logoRef.current.classList.add('train-card-fluo');
            } else if (data.child('logo').val() === 'TER Hauts de France') {
                this.logoRef.current.classList.add('train-card-ter-hauts-de-france');
            } else if (data.child('logo').val() === 'TER Languedoc Roussillon') {
                this.logoRef.current.classList.add('train-card-ter-languedoc-roussillon');
            } else if (data.child('logo').val() === 'TER Metrolor') {
                this.logoRef.current.classList.add('train-card-ter-metrolor');
            } else if (data.child('logo').val() === 'TER Midi Pyrenees') {
                this.logoRef.current.classList.add('train-card-ter-midi-pyrenees');
            } else if (data.child('logo').val() === 'TER Nord Pas de Calais') {
                this.logoRef.current.classList.add('train-card-ter-nord-pas-de-calais');
            } else if (data.child('logo').val() === 'TER Occitanie') {
                this.logoRef.current.classList.add('train-card-ter-occitanie');
            } else if (data.child('logo').val() === 'TER Poitou Charentes') {
                this.logoRef.current.classList.add('train-card-ter-poitou-charentes');
            } else if (data.child('logo').val() === 'TGV') {
                this.logoRef.current.classList.add('train-card-tgv');
            } else if (data.child('logo').val() === 'inOui') {
                this.logoRef.current.classList.add('train-card-inoui');
            } else if (data.child('logo').val() === 'Ouigo') {
                this.logoRef.current.classList.add('train-card-ouigo');
            } else if (data.child('logo').val() === 'Ouigo Classique') {
                this.logoRef.current.classList.add('train-card-ouigo-classique');
            } else if (data.child('logo').val() === 'Intercité') {
                this.logoRef.current.classList.add('train-card-intercite');
            } else if (data.child('logo').val() === 'Teoz') {
                this.logoRef.current.classList.add('train-card-teoz');
            } else if (data.child('logo').val() === 'Lunea') {
                this.logoRef.current.classList.add('train-card-lunea');
            } else if (data.child('logo').val() === 'TGV Lyria') {
                this.logoRef.current.classList.add('train-card-tgv-lyria');
            } else if (data.child('logo').val() === 'Eurostar') {
                this.logoRef.current.classList.add('train-card-eurostar');
            } else if (data.child('logo').val() === 'Thalys') {
                this.logoRef.current.classList.add('train-card-thalys');
            } else if (data.child('logo').val() === 'DB') {
                this.logoRef.current.classList.add('train-card-db');
            } else if (data.child('logo').val() === 'SBB') {
                this.logoRef.current.classList.add('train-card-sbb');
            } else if (data.child('logo').val() === 'SNCB') {
                this.logoRef.current.classList.add('train-card-sncb');
            } else if (data.child('logo').val() === 'ICE') {
                this.logoRef.current.classList.add('train-card-ice');
            } else if (data.child('logo').val() === 'Renfe Ave') {
                this.logoRef.current.classList.add('train-card-renfe-ave');
            } else if (data.child('logo').val() === 'Thello') {
                this.logoRef.current.classList.add('train-card-thello');
            } else if (data.child('logo').val() === 'Trenitalia') {
                this.logoRef.current.classList.add('train-card-trenitalia');
            } else if (data.child('logo').val() === 'Frecciarossa') {
                this.logoRef.current.classList.add('train-card-frecciarossa');
            } else if (data.child('logo').val() === 'Car TER') {
                this.logoRef.current.classList.add('train-card-car-ter');
            } else if (data.child('logo').val() === 'Mobigo') {
                this.logoRef.current.classList.add('train-card-mobigo');
            } else if (data.child('logo').val() === 'BreizhGo') {
                this.logoRef.current.classList.add('train-card-breizhgo');
            } else if (data.child('logo').val() === 'Aleop') {
                this.logoRef.current.classList.add('train-card-aleop');
            } else if (data.child('logo').val() === 'Lio') {
                this.logoRef.current.classList.add('train-card-lio');
            } else if (data.child('logo').val() === 'Remi') {
                this.logoRef.current.classList.add('train-card-remi');
            } else if (data.child('logo').val() === 'Zou') {
                this.logoRef.current.classList.add('train-card-zou');
            } else if (data.child('logo').val() === 'Nomad') {
                this.logoRef.current.classList.add('train-card-nomad');
            } else if (data.child('logo').val() === 'SNCF (logo 1937)') {
                this.logoRef.current.classList.add('train-card-sncf-1937');
            } else if (data.child('logo').val() === 'SNCF (logo 1972)') {
                this.logoRef.current.classList.add('train-card-sncf-1972');
            } else if (data.child('logo').val() === 'SNCF (logo 1985)') {
                this.logoRef.current.classList.add('train-card-sncf-1985');
            } else if (data.child('logo').val() === 'SNCF (logo 1992)') {
                this.logoRef.current.classList.add('train-card-sncf-1992');
            } else if (data.child('logo').val() === 'SNCF (logo carmillon)') {
                this.logoRef.current.classList.add('train-card-sncf');
            }
            get(trains).then(departs => {
                departs.forEach(train => {
                    if (train.child('hourdepart').val()) {
                        let timing;
                        if (train.child('retardtype').val() === 'alheure') {
                            timing = '';
                        } else if (train.child('retardtype').val() === 'retindet') {
                            timing = 'retard indet.';
                        } else if (train.child('retardtype').val() === 'ret') {
                            timing = 'retardé ' + train.child('retardtime').val() + ' min';
                        } else {
                            timing = 'supprimé';
                        }

                        if (i <= 2) {
                            elements.push(<RowDepartAFL destination={train.child('destination').val()} time={train.child('hourdepart').val()} type={train.child('type').val()} gares={train.child('gares').val()} number={train.child('number').val()} timing={train.child('retardtype').val()} retardtime={train.child('retardtime').val()} retardreason={train.child('retardraison').val()} compo={train.child('compo').val()} />);
                        }
                        i++;
                    }
                });
                const root = createRoot(document.getElementById('rows'));
                root.render(elements);
            });
        });
>>>>>>> 07df4752334b4bb0c9a6b97805f2e5785e1f0c30
        setInterval(() => {
            this.scrollX();
        }, 1000);
        this.clock();
    }

    clock() {
        var date = new Date();
        date.setHours(date.getHours() + (date.getTimezoneOffset() / -60));

        var h = date.getUTCHours();
        if (h < 10) {
            h = '0' + h;
        }
        $('#clock-hours').html(h);
        var m = date.getUTCMinutes();
        if (m < 10) {
            m = '0' + m;
        }
        $('#clock-minutes').html(m);
        setInterval(this.clock, '1000');
    }
}

export default DepartsAFLPage;