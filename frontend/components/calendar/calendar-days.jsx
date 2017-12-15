import React, { Component } from 'react';

class Days extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokes: {},
      days: []
    }

    this.makeDays = this.makeDays.bind(this);
  }


  makeDays(){
    let days = {};
    const pokes = this.props.pokes;
    const pokeDays = {};
    const offset = this.props.firstDay;

    for (const poke in pokes) {
      const date = parseInt(pokes[poke].date.slice(-2));
      pokeDays[date] = {
        poke: pokes[poke].double ? "double" : "single",
        bleed: pokes[poke].bleed
      };
    }

    // make nil days
    for (var i = 0; i < offset; i++){
      days[i] = {
        date: null,
      };
    }

    // make days for lengthOfMonth
    for (var i = offset; i < this.props.daysInMonth + offset; i++) {
      const date = i - offset + 1;
      if (pokeDays[date]) {
        days[i] = {
          date: date,
          poke: pokeDays[date].poke,
          bleed: pokeDays[date].bleed,
        }
      } else {
        days[i] = {
          date: date,
        }
      }
    }
    return days;
  }


  render(){
    const makeDays = this.makeDays();
    const days = Object.values(makeDays);
  
    const singlePoke =
      <div className="single-poke">
      <svg height= "50" width= "50" >
        <circle cx="50%" cy="50%" r="28%" fill="rgba(98, 133, 219, 0.8)"></circle>
      </svg >
      </div>;

    const doublePoke = 
      <div className="double-poke">
        <svg height="50" width="50" >
          <circle cx="40%" cy="50%" r="25%" fill="rgba(98, 133, 219, 0.8)"></circle>
          <circle cx="60%" cy="50%" r="25%" fill="rgba(98, 133, 219, 0.8)"></circle>
        </svg >
      </div>;
    
    return (
      <div className='days__container'>
        {
          days.map((day, index) => (
            <div key={`${index}${day.date}`} className='day'>
              <p className='day__date'>{day.date}</p>
              <div className={day.bleed ? "red-drop" : null}></div>
              <p>{day.poke ? (day.poke == 'single' ? singlePoke : doublePoke) : null}</p>
            </div>
            )
          )
        }
      </div>
    )
  }
}

export default Days;