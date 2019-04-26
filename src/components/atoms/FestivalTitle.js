import React, { Component } from 'react';
import '../../resources/sass/detail/FestivalTitle.scss';

class FestivalTitle extends Component {
    render() {
        const {title} = this.props;
        return (
            <React.Fragment>
                <h1 id="title">
                    {title}
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="squiggly-0">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                        <filter id="squiggly-1">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                        </filter>

                        <filter id="squiggly-2">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                        <filter id="squiggly-3">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                        </filter>

                        <filter id="squiggly-4">
                            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                        </filter>
                    </defs>
                </svg>
            </React.Fragment>
        );
    }
}

export default FestivalTitle;