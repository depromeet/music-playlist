import React, { Component } from 'react';
import '../../resources/sass/detail/FestivalTitle.scss';

class FestivalTitle extends Component {
    render() {
        const {title} = this.props;
        return (
            <h1 id="title">
                {title}
                {/* <div class="text">SEOUL JAZZ FESTIVAL</div> */}
            </h1>
        );
    }
}

export default FestivalTitle;