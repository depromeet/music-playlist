import React, { Component } from 'react';

export default class FestivalName extends Component{

    render(){
        const { festival, index } = this.props;
        return(
            <div>
                <li> 
                    {festival}
                    {index}
                </li>
            </div>
        )
    }

}