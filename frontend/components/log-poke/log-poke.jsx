import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class LogPoke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    date: "",
                    double: false,
                    bleed: null       
        };
    }

    componentDidMount() {
        document.title = "Log A Poke";
    }

    handleSubmit(e) {
        e.preventDefault();
        const poke = this.state;
        this.props.logPoke(poke);
    }

    render() {
        return(
        <div className= "log-poke">
            <h1 className= "log-poke__title"> Log a Poke </h1>
            <form action="" className= "log-poke__form"> 
                <label className="log-poke__form-field"> Poke Date
                    <input type="date" className="log-poke__form-input"/>
                </label>
                <label className="log-poke__form-field">Dose
                    <div className="log-poke___toggle-bttn">
                    <input type="radio" id="switch_left" name="switch_2" value="1" checked />
                    <label htmlFor="switch_left">SINGLE</label>
                    <input type="radio" id="switch_right" name="switch_2" value="2" />
                    <label htmlFor="switch_right">DOUBLE</label>
                    </div>
                </label>
                <label className="log-poke__form-field">Bleed?
                    <select className="logpoke___form-select">
                        <option disabled defaultChecked> -- Select Bleed Location -- </option>
                        <optgroup label="Lower Extremities">
                            <option value="left-foot"> Left Foot </option>
                            <option value="right-foot"> Right Foot </option>
                            <option value="left-ankle"> Left Ankle </option>
                            <option value="right-ankle">Right Ankle </option>
                            <option value="left-shin"> Left Shin </option>
                            <option value="right-shin"> Right Shin </option>
                            <option value="left-knee"> Left Knee</option>
                            <option value="right-knee"> Right Knee</option>
                            <option value="left-thigh"> Left Thigh </option>
                            <option value="right-thigh"> Right Thigh </option>
                        </optgroup>
                        <optgroup label="Upper Extremities">
                            <option value="left-hand"> Left Hand </option>
                            <option value="right-hand"> Right Hand </option>
                            <option value="left-wrist"> Left Wrist </option>
                            <option value="right-wrist"> Right Wrist </option>
                            <option value="left-forearm"> Left Forearm </option>
                            <option value="right-forearm"> Right Forearm </option>
                            <option value="left-elbow"> Left Elbow </option>
                            <option value="right-elbow"> Right Elbow </option>
                            <option value="left-upper-arm"> Left Upper Arm </option>
                            <option value="right-upper-arm"> Right Upper Arm </option>
                            <option value="left-shoulder"> Left Shoulder </option>
                            <option value="right-shoulder"> Right Shoulder </option>
                        </optgroup>

                        <optgroup label="Torso">
                            <option value="hips"> Hips </option>
                            <option value="glutes"> Glutes</option>
                            <option value="Midsection"> Midsection </option>
                            <option value="chest"> Chest </option>
                            <option value="lower-back"> Lower Back </option>
                            <option value="upper-back"> Upper Back </option>
                        </optgroup>

                        <optgroup label="Head">
                            <option value="neck"> Neck </option>
                            <option value="head"> Head </option>
                            <option value="nose"> Nose </option>
                            <option value="mouth"> Mouth </option>
                        </optgroup>
                        
                    </select>
                </label>
            </form>
        </div>
        );
    }
}

export default LogPoke;
