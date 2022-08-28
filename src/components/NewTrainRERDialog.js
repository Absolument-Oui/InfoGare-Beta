import React, { Component } from 'react';

import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCFormField } from '@material/form-field';
import { MDCRadio } from '@material/radio';
import { MDCMenu } from '@material/menu';
import { MDCDialog } from '@material/dialog';

import { ref, set, getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

class NewTrainRERDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dialogRef = React.createRef();
        this.trainNumberRef = React.createRef();
        this.trainDestinationRef = React.createRef();
        this.trainMissionRef = React.createRef();
        this.selectTypeRef = React.createRef();
        this.dropBtnRef = React.createRef();
        this.trainLongueur1Ref = React.createRef();
        this.trainLongueur1RadioRef = React.createRef();
        this.trainLongueur2Ref = React.createRef();
        this.trainLongueur2RadioRef = React.createRef();
        this.selectAffichageRef = React.createRef();
        this.dropBtn2Ref = React.createRef();
        this.trainDepartRef = React.createRef();
        this.typesMenu = React.createRef();
        this.affichageMenu = React.createRef();
        this.trainGaresInputRef = React.createRef();
    }

    render() {
        return (
            <div className="mdc-dialog mdc-dialog--fullscreen" id="newTrainRERDialog" ref={this.dialogRef}>
                <div className='mdc-dialog__container'>
                    <div className="mdc-dialog__surface" role="dialog" aria-modal="true" aria-labelledby='newTrainRERDialogTitle' aria-describedby='newTrainRERContent'>
                        <div className="mdc-dialog__header">
                            <h2 className="mdc-dialog__title" id="newTrainRERTitle">Nouveau train</h2>
                            <button className="mdc-icon-button material-icons mdc-dialog__close" data-mdc-dialog-action="close">close</button>
                        </div>
                        <div className="mdc-dialog__content" id="newTrainRERContent">
                            <br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainNumberRef}>
                                <input className="mdc-text-field__input" id="trainNumber" type="number" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainNumber" className="mdc-floating-label">Numéro du train</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainDestinationRef}>
                                <input className="mdc-text-field__input" id="trainDestination" type="text" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainDestination" className="mdc-floating-label">Destination</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainMissionRef}>
                                <input className="mdc-text-field__input" id="trainMission" type="text" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainMission" className="mdc-floating-label">Mission du train</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.selectTypeRef}>
                                <input className="mdc-text-field__input" id="selectType" type="text" readOnly />
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing" tabIndex="0" role="button" ref={this.dropBtnRef}>arrow_drop_down</i>
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="selectType" className="mdc-floating-label">Type</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <span>Longueur du train</span><br />
                            <div className="mdc-form-field" ref={this.trainLongueur1Ref}>
                                <div className='mdc-radio' ref={this.trainLongueur1RadioRef}>
                                    <input type="radio" id="newTrainLongueur1" name="newTrainLongueurs" className="mdc-radio__native-control" />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                    <div className="mdc-radio__ripple"></div>
                                </div>
                                <label htmlFor="newTrainLongueur1" className="mdc-radio__label">Train court</label>
                            </div>
                            <div className="mdc-form-field" ref={this.trainLongueur2Ref}>
                                <div className='mdc-radio' ref={this.trainLongueur2RadioRef}>
                                    <input type="radio" id="newTrainLongueur2" name="newTrainLongueurs" className="mdc-radio__native-control" />
                                    <div className="mdc-radio__background">
                                        <div className="mdc-radio__outer-circle"></div>
                                        <div className="mdc-radio__inner-circle"></div>
                                    </div>
                                    <div className="mdc-radio__ripple"></div>
                                </div>
                                <label htmlFor="newTrainLongueur2" className="mdc-radio__label">Train long</label>
                            </div>
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.selectAffichageRef}>
                                <input className="mdc-text-field__input" id="selectType" type="text" readOnly />
                                <i className="material-icons mdc-text-field__icon mdc-text-field__icon--trailing" tabIndex="0" role="button" ref={this.dropBtn2Ref}>arrow_drop_down</i>
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="selectType" className="mdc-floating-label">Type d'affichage</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainDepartRef}>
                                <input className="mdc-text-field__input" id="trainMission" type="time" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainMission" className="mdc-floating-label">Heure de départ</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <span>Gares desservies</span>
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainGaresInputRef}>
                                <input className="mdc-text-field__input" id="trainGares" type="text" onKeyUpCapture={(e) => { if (e.key === "Enter") { this.addChip(e.target.value, 'chips-gares'); } }} />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainGares" className="mdc-floating-label">Ajouter une gare</label>
                                    </div>
                                    <div className='mdc-notched-outline__trailing'></div>
                                </div>
                            </div><br /><br />
                            <span className="mdc-evolution-chip-set" role="grid" ref={this.trainGaresRef}>
                                <span className="mdc-evolution-chip-set__chips" role="presentation" ref={this.trainGaresChipsRef} id="chips-gares"></span>
                            </span>
                        </div>
                        <footer className="mdc-dialog__actions">
                            <button className="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">Annuler</button>
                            <button className="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept">Créer</button>
                        </footer>
                    </div>
                </div>
                <div className="mdc-dialog__scrim"></div>
                <div className="mdc-menu mdc-menu-surface" id="typesMenu" ref={this.typesMenu} style={{ width: '200px' }}>
                    <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex="-1">
                        <li>
                            <ul className='mdc-menu__selection-group'>
                                <li className='menu-item mdc-list-item' role='menuitem'>
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-rer-a"></span>
                                </li>
                                <li className='menu-item mdc-list-item' role='menuitem'>
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-rer-b"></span>
                                </li>
                                <li className='menu-item mdc-list-item' role='menuitem'>
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-rer-c"></span>
                                </li>
                                <li className='menu-item mdc-list-item' role='menuitem'>
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-rer-d"></span>
                                </li>
                                <li className='menu-item mdc-list-item' role='menuitem'>
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-rer-e"></span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="mdc-menu mdc-menu-surface" id="affichageMenu" ref={this.affichageMenu} style={{ width: '200px' }}>
                    <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex="-1">
                        <li>
                            <ul className='mdc-menu__selection-group'>
                                <li className='mdc-list-item' role='menuitem'>
                                    <span className='mdc-list-item__ripple'></span>
                                    <span className='mdc-list-item__graphic mdc-menu__selection-group-icon'></span>
                                    <span className='mdc-list-item__text'>Heure</span>
                                </li>
                                <li className='mdc-list-item' role='menuitem'>
                                    <span className='mdc-list-item__ripple'></span>
                                    <span className='mdc-list-item__graphic mdc-menu__selection-group-icon'></span>
                                    <span className='mdc-list-item__text'>A l'approche</span>
                                </li>
                                <li className='mdc-list-item' role='menuitem'>
                                    <span className='mdc-list-item__ripple'></span>
                                    <span className='mdc-list-item__graphic mdc-menu__selection-group-icon'></span>
                                    <span className='mdc-list-item__text'>A quai</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    addChip(chip, element) {
        const HTML = `<span class='mdc-evolution-chip__cell mdc-evolution-chip__cell--primary' role='gridcell'><button class='mdc-evolution-chip__action mdc-evolution-chip__action--primary' type='button' tabindex='-1'><span class='mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary'></span><span class='mdc-evolution-chip__text-label'>${chip}</span></button></span>`;
        const chipElem = document.createElement('span');
        chipElem.className = 'mdc-evolution-chip';
        chipElem.id = chip;
        chipElem.setAttribute('role', 'row');
        chipElem.onclick = () => {
            document.getElementById(chip).remove();
        }
        chipElem.innerHTML = HTML;
        document.getElementById(element).appendChild(chipElem);
        const trainGaresProvenanceInput = new MDCTextField(this.trainGaresInputRef.current);
        trainGaresProvenanceInput.value = '';
    }

    componentDidMount() {
        const dialog = new MDCDialog(this.dialogRef.current);
        const trainNumber = new MDCTextField(this.trainNumberRef.current);
        const trainDestination = new MDCTextField(this.trainDestinationRef.current);
        const trainMission = new MDCTextField(this.trainMissionRef.current);
        const selectType = new MDCTextField(this.selectTypeRef.current);
        const dropBtn = new MDCRipple(this.dropBtnRef.current);
        const trainLongueur1 = new MDCFormField(this.trainLongueur1Ref.current);
        const trainLongueur1Radio = new MDCRadio(this.trainLongueur1RadioRef.current);
        const trainLongueur2 = new MDCFormField(this.trainLongueur2Ref.current);
        const trainLongueur2Radio = new MDCRadio(this.trainLongueur2RadioRef.current);
        const selectAffichage = new MDCTextField(this.selectAffichageRef.current);
        const dropBtn2 = new MDCRipple(this.dropBtn2Ref.current);
        const trainDepart = new MDCTextField(this.trainDepartRef.current);
        const typesMenu = new MDCMenu(this.typesMenu.current);
        const affichageMenu = new MDCMenu(this.affichageMenu.current);
        const trainGaresInput = new MDCTextField(this.trainGaresInputRef.current);

        trainLongueur1.input = trainLongueur1Radio;
        trainLongueur2.input = trainLongueur2Radio;

        typesMenu.setAnchorElement(this.dropBtnRef.current);
        typesMenu.setAbsolutePosition(true);
        dropBtn.listen('click', () => {
            typesMenu.open = !typesMenu.open;
        });

        affichageMenu.setAnchorElement(this.dropBtn2Ref.current);
        affichageMenu.setAbsolutePosition(true);
        dropBtn2.listen('click', () => {
            affichageMenu.open = !affichageMenu.open;
        });

        typesMenu.listen('MDCMenu:selected', (event) => {
            if (event.detail.index === 0) {
                selectType.getDefaultFoundation().setValue('RER A');
            } else if (event.detail.index === 1) {
                selectType.getDefaultFoundation().setValue('RER B');
            } else if (event.detail.index === 2) {
                selectType.getDefaultFoundation().setValue('RER C');
            } else if (event.detail.index === 3) {
                selectType.getDefaultFoundation().setValue('RER D');
            } else if (event.detail.index === 4) {
                selectType.getDefaultFoundation().setValue('RER E');
            }
        });

        affichageMenu.listen('MDCMenu:selected', (event) => {
            if (event.detail.index === 0) {
                selectAffichage.getDefaultFoundation().setValue('Heure');
            } else if (event.detail.index === 1) {
                selectAffichage.getDefaultFoundation().setValue('A l\'approche');
            } else if (event.detail.index === 2) {
                selectAffichage.getDefaultFoundation().setValue('A quai');
            }
        });

        dialog.listen('MDCDialog:closing', (event) => {
            if (event.detail.action === 'accept') {
                if (trainDestination.value === '') {
                    alert("Vous devez entrer une destination !");
                    return;
                }

                if (trainMission.value === '') {
                    alert("Vous devez entrer une mission !");
                    return;
                }

                var gares = [];
                for (var i = 0; i < document.getElementById('chips-gares').childElementCount; i++) {
                    gares.push(document.getElementById('chips-gares').children[i].children[0].children[0].children[1].innerText);
                }
                console.log(gares);

                const trainId = Math.floor(Math.random() * 1000000);
                const db = ref(getDatabase(), 'users/' + getAuth().currentUser.uid + '/gares/' + this.props.gid + '/trains/' + trainId);

                set(db, {
                    id: trainId,
                    number: trainNumber.value,
                    destination: trainDestination.value,
                    type: selectType.value,
                    hourdepart: trainDepart.value,
                    gares: gares,
                    hourmode: selectAffichage.value,
                    mission: trainMission.value
                }).then(() => {
                    window.location.reload();
                }).catch((error) => {
                    console.log(error);
                });
            }
        })
    }
}

export default NewTrainRERDialog;