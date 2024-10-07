import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    // Mengatur interval setiap 1 detik untuk memperbarui waktu
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Membersihkan interval saat komponen di-unmount
    clearInterval(this.timerID);
  }

  tick() {
    // Mengupdate state dengan waktu saat ini
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div>
        <h4 className='font-bold'>{this.state.time.toLocaleTimeString()}</h4>
      </div>
    );
  }
}

export default Clock;
