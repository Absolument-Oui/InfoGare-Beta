import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import { MDCRipple, MDCRippleFoundation } from '@material/ripple';

import "../index.scss";
import GareCard from './GareCard';
import EditGareDialog from './EditGareDialog';
import { child, get, getDatabase, ref, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { param } from 'jquery';

class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        const editbtn_ = new MDCRippleFoundation(document.querySelector('#editbtn'));
    }

    render() {
        return (
            <div>
                <div className='center'>
                    <img className='profile-pict' id='profilePict' width="128" height="128" alt="InfoGare" hidden />
                    <span className='material-icons big-icon' id='editProfilePictBtn'>account_circle</span>
                    <br />
                    <h1 id='username' className='inline-block'>Nom d'utilisateur</h1>&nbsp;&nbsp;<button className='mdc-icon-button material-icons inline-block' id='editBtn'><div className='mdc-icon-button__ripple'>edit</div></button>
                    <br />
                    <h3 id='email' className='inline-block'>Email</h3>
                    <div id='cards'>

                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.title = "Mon compte - InfoGare";
        const db = ref(getDatabase());
        
        document.getElementById('username').innerHTML = this.props.user.displayName;
        document.getElementById('email').innerHTML = this.props.user.email;
        if (this.props.user.photoURL) {
            document.getElementById('profilePict').src = this.props.user.photoURL;
            document.getElementById('profilePict').hidden = false;
            document.getElementById('editProfilePictBtn').style.display = 'none';
        }
        const editBtn = new MDCRipple(document.querySelector('#editBtn'));
        editBtn.listen('click', () => {
            window.open('https://auth.infogare.fr/account.htm', '', 'width=750,height=750');
        });

        const root = createRoot(document.getElementById('cards'));

        get(child(db, '/users/' + this.props.user.uid + '/gares')).then(gares => {
            const elements = [];
            gares.forEach(gare => {
                let gareType;
                if (gare.child('type').val() === 'neutral') {
                    gareType = 'Gare classique';
                } else {
                    gareType = 'Gare RER';
                }
                const card = React.createElement(GareCard, { uid: this.props.user.uid, name: gare.child('name').val(), type: gareType, number: gare.child('trains').size, key: gare.key, id: gare.key });
                elements.push(card);
            });
            root.render(elements);
        });
    }
}


export default AccountPage;