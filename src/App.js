import React from "react";
import ReactTooltip from "react-tooltip";
import Header from "./components/FormHeader";
import Challenger from "./components/Challenger";
import WeeklyTable from "./components/WeeklyTable";
import WeightComparison from "./components/WeightComparison";
import Footer from "./components/Footer";
import { Segment, Table, Form, Dropdown } from "semantic-ui-react";
import challengerFormStyle from "./static/style";

const weekOptions = [
  { key: 1, value: "W1", text: "Week 1" },
  { key: 2, value: "W2", text: "Week 2" },
  { key: 3, value: "W3", text: "Week 3" },
  { key: 4, value: "W4", text: "Week 4" }
];

function App() {
  return (
    <div>
      <Header header="Herbs & Beans Keto Cafe Weight Loss Challenge 2020" />

      <Challenger />

      <Segment style={challengerFormStyle}>
        <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
          Meal Selection
        </h1>
        <Dropdown
          placeholder="Select a week"
          search
          selection
          options={weekOptions}
        />
        <Segment>
          <Form>
            <Table style={{ textAlign: "center" }} celled structured>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Day</Table.HeaderCell>
                  <Table.HeaderCell>Pick up Date/Time</Table.HeaderCell>
                  <Table.HeaderCell>Lunch or Dinner</Table.HeaderCell>
                  <Table.HeaderCell>Meal Selection</Table.HeaderCell>
                  <Table.HeaderCell data-tip="Lunch can be Dine in or Pick-up. Dine in should be picked up before 6pm">
                    Pick up
                    <ReactTooltip />
                  </Table.HeaderCell>
                  <Table.HeaderCell>Remark</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <WeeklyTable day="Monday" />
                <WeeklyTable day="Tuesday" />
                <WeeklyTable day="Wednesday" />
                <WeeklyTable day="Thursday" />
                <WeeklyTable day="Friday" />
                <WeeklyTable day="Saturday" />
                <WeeklyTable day="Sunday" />
              </Table.Body>
            </Table>
          </Form>
        </Segment>
      </Segment>
      <WeightComparison />

      <Footer
        footer="HERBS & BEANS LOW CARB CAFE | Shop 6 / 551 Little Lonsdale St,
          Melbourne, VIC 3000 | (03) 85290410"
      />
    </div>
  );
}

export default App;
