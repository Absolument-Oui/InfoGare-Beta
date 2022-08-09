import React, { Component } from 'react';

import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCMenu } from '@material/menu';

class NewTrainDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.dialogRef = React.createRef();
        this.trainNumberRef = React.createRef();
        this.trainDestinationRef = React.createRef();
        this.trainProvenanceRef = React.createRef();
        this.selectTypeRef = React.createRef();
        this.dropBtnRef = React.createRef();
        this.typesMenu = React.createRef();
    }

    render() {
        return (
            <div className="mdc-dialog mdc-dialog--fullscreen" id="newTrainDialog" ref={this.dialogRef}>
                <div className='mdc-dialog__container'>
                    <div className="mdc-dialog__surface" role="dialog" aria-modal="true" aria-labelledby='newGareDialogTitle' aria-describedby='newGareDialgContent'>
                        <div className="mdc-dialog__header">
                            <h2 className="mdc-dialog__title" id="newGareDialogTitle">Nouveau train</h2>
                            <button className="mdc-icon-button material-icons mdc-dialog__close" data-mdc-dialog-action="close">close</button>
                        </div>
                        <div className="mdc-dialog__content" id="newGareDialogContent">
                            <br />
                            <h2>Général</h2>
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainNumberRef}>
                                <input className="mdc-text-field__input" id="trainName" type="number" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainName" className="mdc-floating-label">Numéro du train</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainDestinationRef}>
                                <input className="mdc-text-field__input" id="trainDest" type="text" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainDest" className="mdc-floating-label">Destination</label>
                                    </div>
                                    <div className="mdc-notched-outline__trailing"></div>
                                </div>
                            </div><br /><br />
                            <div className="full-width mdc-text-field mdc-text-field--outlined" ref={this.trainProvenanceRef}>
                                <input className="mdc-text-field__input" id="trainProv" type="text" />
                                <div className="mdc-notched-outline">
                                    <div className="mdc-notched-outline__leading"></div>
                                    <div className="mdc-notched-outline__notch">
                                        <label htmlFor="trainProv" className="mdc-floating-label">Provenance</label>
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
                            </div>
                            <hr />
                        </div>
                        <footer className="mdc-dialog__actions">
                            <button className="mdc-button mdc-dialog__button" data-mdc-dialog-action="close">Annuler</button>
                            <button className="mdc-button mdc-dialog__button" data-mdc-dialog-action="accept">Créer</button>
                        </footer>
                    </div>
                </div>
                <div className="mdc-dialog__scrim"></div>
                <div className="mdc-menu mdc-menu-surface" id="typesMenu" ref={this.typesMenu}>
                    <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex="-1">
                        <li>
                            <span>Trains régionaux</span>
                            <ul className="mdc-menu__selection-group">
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter"></span>
                                </li>
                                <li className=" menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-alsace"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-aquitaine"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-auvergne-rhone-alpes"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-basse-normandie"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-bourgogne"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-bretagne"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-centre"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-franche-comte"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-fluo"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-hauts-de-france"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-languedoc-roussillon"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-metrolor"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-midi-pyrenees"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-nord-pas-de-calais"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-occitanie"></span>
                                </li>
                                <li className="menu-item mdc-list-item" role="menuitem">
                                    <span className="mdc-list-item__ripple"></span>
                                    <span className="menu-item-icon train-card-ter-poitou-charentes"></span>
                                </li>
                            </ul>
                        </li>
                        <li className="mdc-list-divider" role="separator"></li>
                        <span>Trains nationaux</span>
                        <li className="mdc-list-item" role="menuitem">
                            <span className="mdc-list-item__ripple"></span>
                            <span className="mdc-list-item__text">Add space before paragraph</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const trainNumber = new MDCTextField(this.trainNumberRef.current);
        const trainDestination = new MDCTextField(this.trainDestinationRef.current);
        const trainProvenance = new MDCTextField(this.trainProvenanceRef.current);
        const selectType = new MDCRipple(this.selectTypeRef.current);
        const dropBtn = new MDCRipple(this.dropBtnRef.current);
        const typesMenu = new MDCMenu(this.typesMenu.current);
        typesMenu.setAnchorElement(this.dropBtnRef.current);
        typesMenu.setAbsolutePosition(true);
        dropBtn.listen('click', () => {
            typesMenu.open = !typesMenu.open;
        });
    }
}

export default NewTrainDialog;