import React, { Component } from 'react';

class Days extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokes: this.props.pokes,
      // bleeds: [1, 4, 5, 13],
    }
  }

  render(){
    let days = [];

    for (var i = 0; i < this.props.firstDay; i ++) {
      days.push({
        date: null,
        poke: false,
      });
    }

    for (var i = 1; i < this.props.days; i++) {
      const day = {
        date: i,
        poke: false,
      }

      const pokeDays = Object.keys(this.state.pokes);
      if (pokeDays.includes(i.toString())) {
        this.state.pokes[i].double == true ? day.poke = 'double' : day.poke = 'single';
      }
      // const bleedDays = this.state.bleeds;
      // if (bleedDays.includes(i)) {
      //   day.bleed = true;
      // }
      days.push(day);
    }


    return (
      <div className='days__container'>
        {
          days.map((day, index) => (
            <div key={`${index}${day.date}`} className='day'>
              <p className='day__date'>{day.date}</p>
              {/* <p>{day.bleed ? "🔺" : null}</p> */}
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