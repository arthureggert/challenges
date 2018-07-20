import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Grid from './../_common/grid.jsx'
import LibraryCard from './library-card.jsx'
import LibraryTable from './library-table.jsx'
import List from 'list.js'

class Library extends Component {

    state = {
        movies: [
            {
                title: '',
                year: '',
                rating: '',
                genre: '',
                imdbID: ''
            }
        ]
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const movies = JSON.parse(localStorage.getItem('movies')) || []
        this.setState({movies: movies})
        let options = {
            valueNames: [
                'title', 'year', 'rating', 'genre'
            ],
            item: `<tr>
                        <td class="title"></td>
                        <td class="year"></td>
                        <td class="rating"></td>
                        <td class="genre"></td>
                    </tr>`
        }
        let list = new List('library', options, movies);
    }

    render() {
        return (
            <Grid classz="mdl-grid--center-items">
                <LibraryCard>
                    <LibraryTable></LibraryTable>
                </LibraryCard>
            </Grid>
        )
    }
}

export default Library