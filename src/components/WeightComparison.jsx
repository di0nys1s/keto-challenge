import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import challengerFormStyle from "../static/style";

const WeightComparison = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <Segment style={challengerFormStyle}>
      <form className="ui form segment">
        <h2 style={{ textAlign: "center" }} className="meal-order-form">
          Weight Comparison
        </h2>
        <div
          style={{ margin: "0.1rem 0" }}
          className="ui vertically divided grid">
          <div className="two column row">
            <div className="ui vertical divider">
              <i className="arrow right icon"></i>
            </div>
            <div className="column">
              <div className="two fields">
                <div className="field">
                  <label>Start Date</label>
                  <DatePicker
                    placeholderText="Click to select start date"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="MM/dd/yyyy"
                  />
                </div>
                <div className="field">
                  <label>Start Weight</label>
                  <input type="number" placeholder="Weight in kg" />
                </div>
              </div>
            </div>

            <div className="two column row">
              <div className="column">
                <div className="two fields">
                  <div className="field">
                    <label>End Date</label>
                    <DatePicker
                      placeholderText="Click to select end date"
                      selected={endDate}
                      onChange={date => setEndDate(date)}
                      dateFormat="MM/dd/yyyy"
                    />
                  </div>
                  <div className="field">
                    <label>End Weight</label>
                    <input type="number" placeholder="Weight in kg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Segment>
  );
};

export default WeightComparison;
