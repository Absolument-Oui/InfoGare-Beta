import React, { Component } from 'react';

import { MDCRipple } from '@material/ripple';

class TrainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.mediaRef = React.createRef();
        this.showTrainBtn = React.createRef();
        this.editTrainBtn = React.createRef();
        this.deleteTrainBtn = React.createRef();
    }

    render() {
        return (
            <div className="gare-card mdc-card mdc-card--outlined">
                <div className="mdc-card__media mdc-card__media--16-9"ref={this.mediaRef}></div>
                <div className="mdc-card__primary-action">
                    <div className="gare-card__title">{this.props.dest}</div>
                    <div className="gare-card__subtitle">{this.props.time}</div>
                    <div className="gare-card__subtitle">{this.props.type} N° {this.props.number}</div>
                </div>
                <div className="mdc-card__ripple"></div>
                <div className="mdc-card__actions">
                    <div className="mdc-card__action-buttons">
                        <button className="gare-card__button mdc-button mdc-card__action mdc-card__action--button" ref={this.showTrainBtn}>
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Afficher</span>
                        </button>
                        <button className="gare-card__button mdc-button mdc-card__action mdc-card__action--button" ref={this.editTrainBtn}>
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Editer</span>
                        </button>
                        <button className="gare-card__button mdc-button mdc-card__action mdc-card__action--button" ref={this.deleteTrainBtn}>
                            <div className="mdc-button__ripple"></div>
                            <span className="mdc-button__label">Supprimer</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const showGareBtn = new MDCRipple(this.showTrainBtn.current);
        showGareBtn.listen('click', () => {
            window.location.href += `/train/${this.props.id}`;
        });

        const editGareBtn = new MDCRipple(this.editTrainBtn.current);
        const deleteGareBtn = new MDCRipple(this.deleteTrainBtn.current);

        if (this.props.type === 'TER') {
            this.mediaRef.current.classList.add('train-card-ter');
        } else {
            this.mediaRef.current.classList.add('train-card-sncf');
        }
    }
}

export default TrainCard;