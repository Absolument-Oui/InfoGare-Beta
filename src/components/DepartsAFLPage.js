import React, { Component } from 'react';
import $ from 'jquery';

class DepartsAFLPage extends Component {
    render() {
        return(
            <div className='rows-afl'>
                <div className='rows-head'>
                    <div className='text-time'>
                        <span id='clock-hours'>00</span>
                        <div className='clock-blink'>:</div>
                        <span id='clock-minutes'>00</span>
                    </div>
                    <div className='title'>Metz-ville</div>
                    <div className='logo'></div>
                </div>
                <div className='rows'>
                    <div className='row-top'>
                        <div className='col-first'></div>
                        <div className='col-second'>N°</div>
                        <div className='col-third'>DESTINATION</div>
                    </div>
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
                </div>
                <div className='rows-foot'></div>
            </div>
        );
    }

    scrollX() {

        $('.text-scroll-x').each(function () {

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