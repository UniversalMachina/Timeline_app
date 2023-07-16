import React from 'react';
import './Event.css'; // Import the CSS file

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: null,  // will set in componentDidMount
            lastHue: null, // Store last hue
        };
    }

    componentDidMount() {
        this.setState({ color: this.getRandomPastelColor() });
    }

    getRandomPastelColor = () => {
        let hue;

        do {
            hue = Math.floor(Math.random() * 360);
        } while (this.state.lastHue !== null && Math.abs(hue - this.state.lastHue) < 50); // Ensure difference of at least 50 degrees

        this.setState({ lastHue: hue });
        return `hsl(${hue}, 100%, 85%)`;
    }

    render() {
        const { id, selectEvent, selectedEvent } = this.props;
        const { color } = this.state;

        return (
            <div className={`div-elements ${id === selectedEvent ? 'selected' : ''}`}
                style={{ 
                    backgroundColor: color,
                }}
                onClick={() => selectEvent(id)}
            />
        );
    }
}

export default Event;
