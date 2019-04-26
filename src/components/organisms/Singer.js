import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../../resources/sass/detail/Singer.scss';
import { pad0 } from '../../util/util';

class Singer extends Component {
    render() {
        console.log(this.props)
        const { align, index, name, songs, url } = this.props;
        const ols = songs.map((song, i) => {
            return <li key={i}>{song.title}</li>

        });
        return (
            <div className={`singer-component ${align}`} id={`div_${index}`} >
                <h3>{pad0(index, 2)}</h3>
                <div className="info">
                    <Fade bottom>
                        <img src={url}></img>
                    </Fade>
                    <Fade bottom>
                        <div className="singers-div">
                            <ol>
                                {ols}
                            </ol>
                        </div>
                    </Fade>
                </div>
                <p>{name}</p>
            </div>
        );
    }
}

export default Singer;