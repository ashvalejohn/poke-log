import React, { Component } from 'react';

class Days extends Component {
  constructor(props){
    super(props);

    this.state = {
      pokes: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      pokes: nextProps.pokes,
    })
  }

  render(){
    console.log(this.props);
    let days = {};

    for (var i = 0; i < this.props.firstDay; i ++) {
      days[i] = {
        date: null,
      };
    }

    for (var i = this.props.firstDay; i < this.props.days; i++) {
      days[i] = {
        date: i,
        poke: null,
      }
    }

    // loop through max days in month
    const pokes = this.state.pokes;
    for (const poke in pokes) {
      const date = parseInt(pokes[poke].date.slice(-2));

      days[date] = {
        date: date,
        poke: pokes[poke].double ? "double" : "single",
      }
    };
    
      
      // let pokeDays = [];
     
      // console.log(pokeDays);
      // const bleedDays = this.state.bleeds;
      // if (bleedDays.includes(i)) {
      //   day.bleed = true;
      // }

      console.log(days);

    return (
      <div className='days__container'>
        {
          // days.map((day, index) => (
          //   <div key={`${index}${day.date}`} className='day'>
          //   </div>
          //   )
          // )
        }
      </div>
    )
  }
}

export default Days;