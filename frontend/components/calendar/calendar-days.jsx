import React, { Component } from 'react';

class Days extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokes: {
        1 : { double: false },
        3 : { double: false },
        4 : { double: true },
        5 : { double: false },
        8 : { double: false },
        10 : { double: false },
        12 : { double: false },
        13 : { double: true },
      },
      bleeds: [1, 4, 5, 13],
    }
  }

  render(){
    let days = [];
    for (var i = 1; i < this.props.days; i++) {
      const day = {
        date: i,
        poke: false,
        bleed: false,
      }

      const pokeDays = Object.keys(this.state.pokes);
      if (pokeDays.includes(i.toString())) {
        this.state.pokes[i].double == true ? day.poke = 'double' : day.poke = 'single';
      }
      const bleedDays = this.state.bleeds;
      if (bleedDays.includes(i)) {
        day.bleed = true;
      }
      days.push(day);
    }

    return (
      <div className='days__container'>
        {
          days.map(day => (
            <div key={day.date} className='day'>
              <p className='day__date'>{day.date}</p>
              <p>{day.bleed ? "🔺" : null}</p>
              <p>{day.poke ? (day.poke == 'single' ? "🔵" : "🔵🔵") : null}</p>
            </div>
            )
          )
        }
      </div>
    )
  }
}

export default Days;