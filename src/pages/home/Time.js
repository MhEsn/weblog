import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 'Time is: ' + new Date().toLocaleTimeString()
        };

        this.showCurrentTime = this.showCurrentTime.bind(this);
    }

    componentDidMount() {
        this.showCurrentTime();
    }

    showCurrentTime() {
        setInterval(() => {
            this.setState(() => {
                return { time: 'Time is: ' + new Date().toLocaleTimeString() };
            });
        }, 1000);
    }

    render() {
        return (
            <p>
                {this.state.time}
            </p>
        );
    }
}

export default Time;