import '../../resources/sass/detail/YearSelector.scss';
import ScrollableSelector from './ScrollableSelector';

class YearSelector extends ScrollableSelector {
    constructor(props) {
        super({
            amount:300,
            list: props.years
        })
    }

    render() {
        return super.render(-18, 140);
    }
}

export default YearSelector;