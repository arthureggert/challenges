import React, {Component} from 'react'
import AboutCard from './about-card.jsx'
import Grid from './../_common/grid.jsx'

const data = {
    maincard: {
        title: 'LibraryManager - Your Online Librabry',
        text: ' <h4>Welcome!</h4><p>Our library management service caters to both home and smal' +
                'l organizational libraries. Our online software lets you create multiple librari' +
                'es, catalog movies <b>(music, books and video games comming soon)</b>.</p>',
        icon: ''
    },
    infocards: [
        {
            title: 'Library Management',
            text: '<p>This SPA can be used as a online movie manger, find a movie that you like an ' +
                    'then add it to your library. Whether you have 50 items or 100,000 items, your li' +
                    'brary is precious. With libib, managing your private library of movies is a snap' +
                    '.</p>',
            icon: 'donut_large'
        }, {
            title: 'Automatic Information',
            icon: 'find_in_page',
            text: '<p>Search and LibraryManager automatically retrieves that item\'s cover art anda' +
                    'll pertinent information.</p>'
        }, {
            title: 'Keep your Inventory',
            icon: 'store',
            text: '<p>Oh horrors! Someone has broken in your house and stolen all your Blu-rays and' +
                    ' DVDs... well with a quick export of your library, you now have a complete list ' +
                    'of every item you owned.</p>'
        }
    ]
}

class About extends Component {

    state = {
        maincard: {
            title: '',
            text: '',
            icon: ''
        },
        infocards: []
    };

    componentDidMount() {
        this.setState(data);
    }

    render() {
        return (
            <Grid classz="mdl-grid--center-items">
                <AboutCard {...this.state.maincard} classz="mdl-cell--11-col">
                    <Grid>
                        {this
                            .state
                            .infocards
                            .map((card, index) => (<AboutCard key={index} {...card}/>))}
                    </Grid>
                </AboutCard>
            </Grid>
        )
    }
}
export default About