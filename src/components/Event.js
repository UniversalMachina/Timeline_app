import React from 'react';
import './Event.css'; // Import the CSS file

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.getRandomPastelColor(),
        };
    }

    // Generate a random pastel color
    getRandomPastelColor = () => {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 100%, 85%)`;
    }

    render() {
        const { id, selectEvent, selectedEvent } = this.props;
        const { color } = this.state;

        return (
            <div elements
                style={{ 
                    minHeight: '111px', 
                    width: '100px', 
                    backgroundColor: id === selectedEvent ? color : color,
                    display: 'inline-block', 
                    cursor: 'pointer',
                    position: 'relative',
                }}
                onClick={() => selectEvent(id)}
            />
        );
    }
}

export default Event;