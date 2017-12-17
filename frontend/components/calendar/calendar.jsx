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
      monthNum: monthNum,
      year: year,
      pokes: this.props.pokes,
      today: today,
    }

    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.getFirstDayOfMonth = this.getFirstDayOfMonth.bind(this);
  }

  componentDidMount(){
    const query = `${this.state.year}-${this.state.monthNum}`;
    this.props.fetchPokes(query);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      pokes: nextProps.pokes,
      monthNum: nextProps.currentMonth,
    });
  }

  handleChangeMonth(e){
    e.preventDefault();
    let month = parseInt(e.target.value);

    // change month should take a zero-index integer (i.e. December is '11')
    this.props.changeMonth(month);
    this.setState({
      month: e.target.value,
    });
  }

  getDaysInMonth(){
    // (2017, 12, 0) <== Returns last date of the month, which can be used to determine month length
    return new Date(this.state.year, (this.state.monthNum + 1), 0).getDate();
  }

  getFirstDayOfMonth(){
    return new Date(this.state.year, this.state.monthNum).getDay();
  }

  render(){
    return (
      <div className='calendar'>
        <h1 className='calendar__title'>Calendar</h1>
        <select defaultValue={this.state.month} onChange={this.handleChangeMonth} className='calendar__select-month'>
          <option value="00">January</option>
          <option value="01">February</option>
          <option value="02">March</option>
          <option value="03">April</option>
          <option value="04">May</option>
          <option value="05">June</option>
          <option value="06">July</option>
          <option value="07">August</option>
          <option value="08">September</option>
          <option value="09">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
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