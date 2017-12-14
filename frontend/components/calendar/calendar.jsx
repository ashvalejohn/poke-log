import React, { Component } from 'react';
import Days from './calendar-days';

class Calendar extends Component {
  constructor(props){
    super(props);
    
    const date = new Date(), locale = "en-us", month = date.toLocaleString(locale, { month: "long" });
    const year = date.getFullYear();
    const monthNum = date.getMonth() + 1;
    const today = date.getDate();

    this.state = {
      date: date,
      month: month,
      monthNum: monthNum,
      year: year,
    }

    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
  }

  handleChangeMonth(e){
    e.preventDefault();
    this.setState({
      month: e.target.value,
    }, () => (console.log(`Please fetch infusion info for ${this.state.month}`)));
  }

  getDaysInMonth(){
    return new Date(this.state.year, this.state.monthNum, 0).getDate();
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
            <span className="dayName">Sun</span>
            <span className="dayName">Mon</span>
            <span className="dayName">Tue</span>
            <span className="dayName">Wed</span>
            <span className="dayName">Thu</span>
            <span className="dayName">Fri</span>
            <span className="dayName">Sat</span>
          </div>

          <Days days={this.getDaysInMonth()} today={this.state.today} date={this.state.date} month={this.state.month} />
        </div>
      </div>
    )
  }
}

export default Calendar;