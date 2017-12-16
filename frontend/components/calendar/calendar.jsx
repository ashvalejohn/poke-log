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
    this.getNewMonth = this.getNewMonth.bind(this);
  }

  componentDidMount(){
    const query = `${this.state.year}-${this.state.monthNum + 1}`;
    this.props.fetchPokes(query);
  }

  componentWillReceiveProps(nextProps){
    console.log('RECEIVED PROPS:');
    console.log(nextProps);
    this.setState({
      pokes: nextProps.pokes,
      monthNum: nextProps.currentMonth,
    });
  }

  handleChangeMonth(e){
    e.preventDefault();
    this.setState({
      month: e.target.value,
    }, () => (this.getNewMonth()));
  }

  getDaysInMonth(){
    const zeroDays = new Date(this.state.year, this.state.monthNum, 0).getDate();
    return zeroDays + 1;
  }

  getFirstDayOfMonth(){
    return new Date(this.state.year, this.state.monthNum).getDay();
  }

  getNewMonth(){
    const monthNums = {
      "January": '01',
      "February": '02',
      "March": '03',
      "April": '04',
      "May": '05',
      "June": '06',
      "July": '07',
      "August": '08',
      "September": '09',
      "October": '10',
      "November": '11',
      "December": '12',
    }

    let month = `${this.state.year}-${monthNums[this.state.month]}`;
    this.props.changeMonth(month);
  }

  render(){
    console.log('RENDER');
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