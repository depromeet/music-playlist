import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../../resources/sass/detail/Singer.scss';
import { pad0 } from '../../util/util';

class Singer extends Component {
    render() {
        const { align, index, name, songs, url } = this.props;
        // const url = "https://cdn.newsday.com/polopoly_fs/1.19856255.1531770104!/httpImage/image.jpg_gen/derivatives/landscape_768/image.jpg";
        const ols = songs.map((title) => {
            return (
                <li>{title}</li>
            )
        });
        return (
            <div className={`singer-component ${align}`} id={`div_${index}`}>
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