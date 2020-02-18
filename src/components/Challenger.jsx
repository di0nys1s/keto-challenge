import React from "react";
import WeightComparison from "./WeightComparison";
import { Dropdown, Segment, TextArea } from "semantic-ui-react";

const genderOptions = [
  { key: "M", value: "MA", text: "Male" },
  { key: "F", value: "FE", text: "Female" },
  { key: "L", value: "LGBT", text: "L.G.B.T.Q.I.A.+" }
];

const challengerFormStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

const Challenger = () => {
  return (
    <React.Fragment>
      <Segment style={challengerFormStyle}>
        <form className="ui form segment">
          <h2 style={{ textAlign: "center" }} className="meal-order-form">
            Meal Plan Order Form
          </h2>
          <h4 className="ui horizontal divider header">
            <i className="tag icon"></i>
            Challenger Info
          </h4>
          <div className="three fields">
            <div className="field">
              <label>First name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="field">
              <label>Middle name</label>
              <input type="text" placeholder="Middle Name" />
            </div>
            <div className="field">
              <label>Last name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Gender</label>
              <Dropdown
                options={genderOptions}
                placeholder="Gender"
                search
                searchInput={{ autoFocus: false }}
                selection
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <div className="field">
                <input type="text" placeholder="(xxx)" />
              </div>
            </div>
          </div>

          <div className="field">
            <label>E-mail</label>
            <input type="email" placeholder="Please type your email" />
          </div>

          <div className="field">
            <label className="ui red ribbon label">
              Special Dietary / Medical Condition
            </label>
            <TextArea placeholder="Please specify if you have any special dietary and / or medical conditions" />
          </div>
          <div className="field">
            <label className="ui orange ribbon label">Food Allergy</label>
            <TextArea placeholder="Please tell us if you are allergic to any kind of food" />
          </div>
          <div className="inline field">
            <div className="ui checkbox">
              <input type="checkbox" name="terms" />
              <label>I agree to the terms and conditions</label>
            </div>
          </div>
          <div className="ui primary submit button">Submit</div>
        </form>
      </Segment>

      <Segment>
        <WeightComparison />
      </Segment>

      {/*<Segment>
          <List celled order>
            <Header as="h1" color="olive">
              Meal List
            </Header>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
            <List.Item>1. Grilled Chicken with Green Salad</List.Item>
          </List>
        </Segment>*/}
    </React.Fragment>
  );
};

export default Challenger;
