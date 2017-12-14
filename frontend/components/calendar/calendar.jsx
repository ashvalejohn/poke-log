import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props){
    super(props);

    const date = new Date(), locale = "en-us", month = date.toLocaleString(locale, { month: "long" });

    this.state = {
      month: month,
    }

    this.handleChangeMonth = this.handleChangeMonth.bind(this);
  }

  handleChangeMonth(e){
    e.preventDefault();
    this.setState({
      month: e.target.value,
    }, () => (console.log(`Please fetch infusion info for ${this.state.month}`)));
    
  }

  render(){
    return (
      <div className='calendar'>
        <h1 className='calendar__title'>Calendar</h1>
        <select defaultValue={this.state.month} onChange={this.handleChangeMonth} className='calendar__select-month'>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <div className='calendar__grid'>
          <div className='grid__days'>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;