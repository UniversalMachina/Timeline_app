import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

class Textarea extends React.Component {
    render() {
        const { selectedEvent, texts, handleTextChange } = this.props;

        return selectedEvent !== null ? (
            <div className="quill-wrapper">
                <ReactQuill 
                    value={texts[selectedEvent] || ''}
                    onChange={handleTextChange}
                />
            </div>
        ) : null;
    }
}

export default Textarea;
