import React from 'react';
import Event from './Event';
import './Timeline.css'; // Import the CSS file

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            selectedEvent: null,
            texts: {},
            counter: 0, // Added a counter for unique keys
        };
    }

    selectEvent = (id) => {
        this.setState({ selectedEvent: id });
    }

    handleTextChange = (e) => {
        this.setState({ 
            texts: { 
                ...this.state.texts, 
                [this.state.selectedEvent]: e.target.value 
            } 
        });
    }
    
    addEvent = () => {
        const newEvent = this.state.counter;
        this.setState({ 
            events: [...this.state.events, newEvent],
            counter: newEvent + 1, 
        });
    }
    
    render() {
        const { events, selectedEvent, texts } = this.state;
        return (
            <>
                {selectedEvent !== null && (
                    <textarea 
                        className="event-textarea" 
                        value={texts[selectedEvent] || ''}
                        onChange={this.handleTextChange}
                        autoFocus 
                    />
                )}
                <div className="timeline">
                    <div className="timeline-content">
                        {events.map((_, i) => (
                            <Event 
                                key={i} 
                                id={i} 
                                selectEvent={this.selectEvent} 
                                selectedEvent={selectedEvent} 
                            />
                        ))}
                    </div>
                    <button className="add-event-button" onClick={() => this.setState({ events: [...events, events.length] })}>+</button>
                </div>
            </>
        );
    }
}

export default Timeline;