import React, { Component } from 'react';

class GoogleAd extends Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins class="adsbygoogle"
                style={{display: 'block'}}
                data-ad-client="ca-pub-3014614649994013"
                data-ad-slot="5523609982"
                data-ad-format="auto" />
        );
    }
}

export default GoogleAd;