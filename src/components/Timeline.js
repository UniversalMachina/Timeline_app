import React from 'react';
import Event from './Event';
import Textarea from './Textarea'; // Import the new component
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

        this.timelineContentRef = React.createRef(); // Create a reference
    }

    componentDidMount() {
        // This function translates vertical scrolling into horizontal scrolling
        const scrollHandler = (e) => {
            if (this.timelineContentRef.current) {
                this.timelineContentRef.current.scrollLeft += e.deltaY;
            }
        };

        if (this.timelineContentRef.current) {
            this.timelineContentRef.current.addEventListener('wheel', scrollHandler);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (this.timelineContentRef.current) {
                this.timelineContentRef.current.removeEventListener('wheel', scrollHandler);
            }
        };
    }

    selectEvent = (id) => {
        this.setState({ selectedEvent: id });
    }

    handleTextChange = (value) => {
        this.setState({ 
            texts: { 
                ...this.state.texts, 
                [this.state.selectedEvent]: value
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
                <Textarea 
                    selectedEvent={selectedEvent}
                    texts={texts}
                    handleTextChange={this.handleTextChange}
                />
                <div className="timeline">
                <div className="timeline-content" ref={this.timelineContentRef}>
    <div className="timeline-content-inner">
        {events.map((_, i) => (
            <Event 
                key={i} 
                id={i} 
                selectEvent={this.selectEvent} 
                selectedEvent={selectedEvent} 
            />
        ))}
    </div>
    <div className="padding-div"></div>
</div>

                    <button className="add-event-button" onClick={this.addEvent}>+</button>
                </div>
            </>
        );
    }
    
}

export default Timeline;