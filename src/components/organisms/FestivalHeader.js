import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FestivalTitle from '../atoms/FestivalTitle';
import YearSelector from '../molecules/YearSelector';

class FestivalHeader extends Component {
    render() {
        const { title, years, selectedYearIndex, handleYearChange } = this.props;
        const style = {
            position: 'relative'
        }
        return (
            <div style={style}>
                <div className="go-main"><Link to="/">ｘ</Link></div>
                <FestivalTitle title={title.toUpperCase()} />
                {(years) &&
                    <YearSelector years={years}
                        selectedYearIndex={selectedYearIndex}
                        handleYearChange={handleYearChange} />
                }
            </div>
        );
    }
}

export default FestivalHeader;