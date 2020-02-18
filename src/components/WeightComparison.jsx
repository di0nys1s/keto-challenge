import React from "react";
import { Segment } from "semantic-ui-react";

const challengerFormStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

const WeightComparison = () => {
  return (
    <Segment style={challengerFormStyle}>
      <form className="ui form segment">
        <h2 style={{ textAlign: "center" }} className="meal-order-form">
          Weight Comparison
        </h2>
        <div style={{ margin: "0.1rem 0" }} class="ui vertically divided grid">
          <div class="two column row">
            <div class="ui vertical divider">
              <i class="arrow right icon"></i>
            </div>
            <div class="column">
              <div className="two fields">
                <div className="field">
                  <label>Date</label>
                  <input type="text" placeholder="Date" />
                </div>
                <div className="field">
                  <label>Weight</label>
                  <input type="text" placeholder="Weight" />
                </div>
              </div>
            </div>

            <div class="two column row">
              <div class="column">
                <div className="two fields">
                  <div className="field">
                    <label>Date</label>
                    <input type="text" placeholder="Date" />
                  </div>
                  <div className="field">
                    <label>Weight</label>
                    <input type="text" placeholder="Weight" />
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
