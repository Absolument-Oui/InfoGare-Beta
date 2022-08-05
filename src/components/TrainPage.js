import React, { Component } from 'react';

import { get, getDatabase, child, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { MDCRipple } from '@material/ripple';
import { MDCMenu } from '@material/menu';
import { MDCList } from '@material/list';
import $ from 'jquery';

import "../index.scss";

class TrainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.destRef = React.createRef();
        this.hourDepartRef = React.createRef();
        this.hourArriveRef = React.createRef();
        this.typeRef = React.createRef();
        this.typeIconRef = React.createRef();
        this.garesRef = React.createRef();
    }

    render() {
        return (
            <div className='main-content'>
                <div className='center'>
                    <h1 ref={this.destRef}></h1>
                    <button className='mdc-icon-button material-icons' id='showBtn'>visibility</button><button className='mdc-icon-button material-icons' id='editBtn'>edit</button><button className='mdc-icon-button material-icons' id='deleteBtn'>delete</button>
                    <div id='showMenu' className='mdc-menu mdc-menu-surface'>
                        <ul className='mdc-list' role='menu' aria-hidden='true' aria-orientation='vertical' tabIndex='0'>
                            <li className='menu-item mdc-list-item' role='menuitem'>
                                <span className='menu-item quai'></span>
                                <span className='menu-item-text mdc-list-item__text'>Quai</span>
                                <span className='mdc-list-item__ripple'></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <br /><br />
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr style={{ textAlign: 'left' }}>
                            <th><h3>Heure d'arrivée</h3></th>
                            <th><h3>Heure de départ</h3></th>
                            <th><h3>Type de train</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span ref={this.hourArriveRef}></span>
                            </td>
                            <td>
                                <span ref={this.hourDepartRef}></span>
                            </td>
                            <td>
                                <div style={{ width: '35px', display: 'inline-block' }} className='train-logo' ref={this.typeIconRef}></div>&nbsp;<span style={{ marginTop: '15px', position: 'absolute' }} ref={this.typeRef}></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th><h3>Gares desservies</h3></th>
                        </tr>
                    </thead>
                    <tbody className='train-stations train-stations-solo' ref={this.garesRef} style={{ fontSize: '2em' }}>

                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount() {
        const uid = getAuth().currentUser.uid;
        const db = ref(getDatabase(), 'users/' + uid + '/gares/' + this.props.gid);
        let type;

        let gareName;

        get(child(db, 'name')).then(snap => {
            gareName = snap.val();
        });

        get(child(db, '/trains/' + this.props.id)).then(train => {
            this.destRef.current.innerText = train.child('destination').val();
            this.hourDepartRef.current.innerText = train.child('hourdepart').val() ? train.child('hourdepart').val() : '-';
            this.hourArriveRef.current.innerText = train.child('hourarrive').val() ? train.child('hourarrive').val() : '-';
            this.typeRef.current.innerText = train.child('type').val();
            var gares2 = train.child('gares').val().split('|');
            var gares = train.child('from').val().split('|');
            gares.forEach(element => {
                if (element !== '') {
                    this.garesRef.current.innerHTML += '<span>' + element + '</span> > ';
                }
            });
            this.garesRef.current.innerHTML += '<span style="font-weight: bold; font-style: oblique">' + gareName + '</span> > ';
            gares2.forEach(element => {
                if (element !== '') {
                    this.garesRef.current.innerHTML += '<span>' + element + '</span> > ';
                }
            });
            type = train.child('type').val();
            if (type === 'TER') {
                this.typeIconRef.current.classList.add('train-logo-ter');
            } else if (type === 'SNCF (carmillon)') {
                this.typeIconRef.current.classList.add('train-logo-sncf');
                this.typeRef.current.innerText = 'Train SNCF';
            } else if (type === 'inOui') {
                this.typeIconRef.current.classList.add('train-logo-inoui');
            } else if (type === 'TGV') {
                this.typeIconRef.current.classList.add('train-logo-tgv');
            } else if (type === 'ICE') {
                this.typeIconRef.current.classList.add('train-logo-ice');
            } else if (type === 'TGV Lyria') {
                this.typeIconRef.current.classList.add('train-logo-lyria');
            } else if (type === 'OuiGo') {
                this.typeIconRef.current.classList.add('train-logo-ouigo');
            } else if (type === 'OuiGo Classique') {
                this.typeIconRef.current.classList.add('train-logo-ouigo-classique');
            } else if (type === 'Fluo Grand Est') {
                this.typeIconRef.current.classList.add('train-logo-fluo');
            } else if (type === 'TER Occitanie') {
                this.typeIconRef.current.classList.add('train-logo-occitanie');
            } else if (type === 'Intercité') {
                this.typeIconRef.current.classList.add('train-logo-intercite');
            } else if (type === 'Aléop') {
                this.typeIconRef.current.classList.add('train-logo-aleop');
            } else if (type === 'TER Auvergne Rhône Alpes') {
                this.typeIconRef.current.classList.add('train-logo-auvergne-rhone-alpes');
            } else if (type === 'BreizhGo') {
                this.typeIconRef.current.classList.add('train-logo-breizhgo');
            } else if (type === 'DB') {
                this.typeIconRef.current.classList.add('train-logo-db');
            } else if (type === 'TER Hauts de France') {
                this.typeIconRef.current.classList.add('train-logo-ter-hauts-de-france');
            } else if (type === 'Lio') {
                this.typeIconRef.current.classList.add('train-logo-lio');
            } else if (type === 'TER Metrolor') {
                this.typeIconRef.current.classList.add('train-logo-ter-metrolor');
            } else if (type === 'Mobigo') {
                this.typeIconRef.current.classList.add('train-logo-mobigo');
            } else if (type === 'Nomad') {
                this.typeIconRef.current.classList.add('train-logo-nomad');
            } else if (type === 'Rémi') {
                this.typeIconRef.current.classList.add('train-logo-remi');
            } else if (type === 'Renfe Ave') {
                this.typeIconRef.current.classList.add('train-logo-renfe-ave');
            } else if (type === 'SBB') {
                this.typeIconRef.current.classList.add('train-logo-sbb');
            } else if (type === 'SNCF (logo 1985)') {
                this.typeIconRef.current.classList.add('train-logo-sncf-1985');
                this.typeRef.current.innerText = 'Train SNCF';
            } else if (type === 'SNCF (logo 1992)') {
                this.typeIconRef.current.classList.add('train-logo-sncf-1992');
                this.typeRef.current.innerText = 'Train SNCF';
            } else if (type === 'TER Alsace') {
                this.typeIconRef.current.classList.add('train-logo-ter-alsace');
            } else if (type === 'TER Aquitaine') {
                this.typeIconRef.current.classList.add('train-logo-ter-aquitaine');
            } else if (type === 'TER Basse Normandie') {
                this.typeIconRef.current.classList.add('train-logo-ter-basse-normandie');
            } else if (type === 'TER Bourgogne') {
                this.typeIconRef.current.classList.add('train-logo-ter-bourgogne');
            } else if (type === 'TER Bretagne') {
                this.typeIconRef.current.classList.add('train-logo-ter-bretagne');
            } else if (type === 'TER Centre') {
                this.typeIconRef.current.classList.add('train-logo-ter-centre');
            } else if (type === 'TER Languedoc Roussillon') {
                this.typeIconRef.current.classList.add('train-logo-ter-languedoc-roussillon');
            } else if (type === 'TER Midi Pyrénées') {
                this.typeIconRef.current.classList.add('train-logo-ter-midi-pyrenees');
            } else if (type === 'TER Nord Pas de Calais') {
                this.typeIconRef.current.classList.add('train-logo-ter-nord-pas-de-calais');
            } else if (type === 'TER Poitou Charentes') {
                this.typeIconRef.current.classList.add('train-logo-ter-poitou-charentes');
            } else if (type === 'Thello') {
                this.typeIconRef.current.classList.add('train-logo-thello');
            } else if (type === 'Tram train') {
                this.typeIconRef.current.classList.add('train-logo-tram-train');
            } else if (type === 'Zou') {
                this.typeIconRef.current.classList.add('train-logo-zou');
            } else if (type === 'Eurostar') {
                this.typeIconRef.current.classList.add('train-logo-eurostar');
            } else if (type === 'Thalys') {
                this.typeIconRef.current.classList.add('train-logo-thalys');
            } else if (type === 'Lunea') {
                this.typeIconRef.current.classList.add('train-logo-lunea');
            } else if (type === 'Teoz') {
                this.typeIconRef.current.classList.add('train-logo-teoz');
            } else if (type === 'Frecciarossa') {
                this.typeIconRef.current.classList.add('train-logo-frecciarossa');
            } else if (type === 'Trenitalia') {
                this.typeIconRef.current.classList.add('train-logo-trenitalia');
            } else if (type === 'CFL') {
                this.typeIconRef.current.classList.add('train-logo-cfl');
            } else if (type === 'SNCB') {
                this.typeIconRef.current.classList.add('train-logo-sncb');
            } else {
                this.typeIconRef.current.classList.add('train-logo-sncf');
            }
        });

        const showBtn = new MDCRipple(document.getElementById('showBtn'));
        showBtn.listen('click', () => {
            const showMenu = new MDCMenu(document.getElementById('showMenu'));
            showMenu.setFixedPosition(true);
            showMenu.setAnchorElement(document.querySelector('#showBtn'));
            showMenu.open = true;
        });

        const showMenuList = new MDCList(document.querySelector('.mdc-list'));
        showMenuList.listen('MDCList:action', (event) => {
            if (event.detail.index === 0) {
                window.location.href = '/gare/' + this.props.gid + '/train/' + this.props.id + '/quai';
            }
        });
    }
}

export default TrainPage;