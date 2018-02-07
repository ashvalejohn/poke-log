import React, { Component } from 'react';
import Days from './calendar-days';

class Calendar extends Component {
  constructor(props){
    super(props);

    const date = new Date(), locale = "en-us";
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthNum = date.getMonth();
    const today = date.getDate();

    this.state = {
      date: date,
      month: month,
      year: year,
      pokes: this.props.pokes,
      today: today,
    }

    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);
  }

  componentDidMount(){
    const query = `${this.state.year}-${this.state.month}`;
    this.props.fetchPokes(query);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      pokes: nextProps.pokes,
      month: nextProps.currentMonth,
      year: nextProps.currentYear,
    });
  }

  handleChangeMonth(e){
    e.preventDefault();
    let month;
    let year = this.state.year;
    if (e.target.value == "prev"){
      if (this.state.month == 0){
        month = 11;

        year = this.state.year - 1;
      } else{
        month = this.state.month - 1;
      }
    } else {
      if (this.state.month == 11) {
        month = 0;
        year = this.state.year + 1;
      } else {
        month = this.state.month + 1;
      }
    }

    // change month should take a zero-index integer (i.e. December is '11')
    this.props.changeMonth(month, year);
  }

  getDaysInMonth(){
    // (2017, 12, 0) <== Returns last date of the month, which can be used to determine month length
    return new Date(this.state.year, (this.state.month + 1), 0).getDate();
  }

  getFirstDayOfMonth(){
    return new Date(this.state.year, this.state.month).getDay();
  }

  render(){

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    return (
      <div className='calendar'>
        <h1 className='calendar__title'>Calendar</h1>
        <div className='calendar__select-month'>
          <button value="prev" onClick={this.handleChangeMonth} className="calendar__button calendar__button--prev">Prev</button>
          <p className='calendar__month'>{months[this.state.month]} {this.state.year}</p>
          <button value="next" onClick={this.handleChangeMonth} className="calendar__button calendar__button--next">Next</button>
        </div>
        <div className='calendar__grid'>
          <div className='grid__days'>
            <span className="day-name">Sun</span>
            <span className="day-name">Mon</span>
            <span className="day-name">Tue</span>
            <span className="day-name">Wed</span>
            <span className="day-name">Thu</span>
            <span className="day-name">Fri</span>
            <span className="day-name">Sat</span>
          </div>

          <Days 
            daysInMonth={this.getDaysInMonth()} 
            today={this.state.today} 
            date={this.state.date} 
            month={this.state.month} 
            firstDay={this.getFirstDayOfMonth()} 
            pokes={this.state.pokes}/>
        </div>
      </div>
    )
  }
}

export default Calendar;