import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Table,
  Radio,
  Form,
  Select,
  Input,
  Button,
  Label
} from "semantic-ui-react";

const options = [
  { key: "1", value: "LU", text: "Lunch" },
  { key: "2", value: "DI", text: "Dinner" }
];

const mealOptions = [
  { key: "1", value: "GCGS", text: "Grilled Chicken with Green Salad" },
  { key: "2", value: "GCMV", text: "Grilled Chicken with Mixed Vegetable" },
  { key: "3", value: "SBMV", text: "Slow Cooked Beef with Mixed Vegetable" },
  { key: "4", value: "TCCR", text: "Teriyaki Chicken with Cauliflower Rice" },
  { key: "5", value: "SCCR", text: "Satay Chicken with Cauliflower Rice" },
  { key: "6", value: "CFCR", text: "Chicken Stir-fried with Cauliflower Rice" },
  { key: "7", value: "VSCR", text: "Vegeterian Stir-fried Cauliflower Rice" },
  { key: "8", value: "RCCR", text: "Red Curry Chicken with Cauliflower Rice" },
  { key: "9", value: "TGCR", text: "Thai Green Curry with Cauliflower Rice" },
  { key: "10", value: "CSN", text: "Chicken Stir-fried Noodle" },
  { key: "11", value: "VSN", text: "Vegeterian Stir-fried Noodle" },
  { key: "12", value: "FC", text: "Fettucine Carbonara" },
  { key: "13", value: "VF", text: "Vegeterian Fettucine" },
  { key: "14", value: "VP", text: "Vegeterian Pizza" },
  { key: "15", value: "BCLCP", text: "Bacon & Cheese Low Carbs Pizza" },
  { key: "16", value: "CCLCP", text: "Cajun Chicken Low Carbs Pizza" }
];

const WeeklyTable = props => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
      <Table.Row>
        <Table.Cell>
          <Label>{props.day}</Label>
        </Table.Cell>
        <Table.Cell>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
        </Table.Cell>
        <Table.Cell>
          <Form.Field
            placeholder="Lunch or Dinner"
            control={Select}
            options={options}
          />
          <Form.Field
            placeholder="Lunch or Dinner"
            control={Select}
            options={options}
          />
        </Table.Cell>
        <Table.Cell>
          <Form.Field
            placeholder="Please select your lunch"
            control={Select}
            options={mealOptions}
          />
          <Form.Field
            placeholder="Please select your dinner"
            control={Select}
            options={mealOptions}
          />
        </Table.Cell>
        <Table.Cell>
          <Radio toggle />
        </Table.Cell>
        <Table.Cell>
          <Input placeholder="Note" />
        </Table.Cell>
        <Table.Cell>
          <Button>Add</Button>
        </Table.Cell>
      </Table.Row>
    </React.Fragment>
  );
};

export default WeeklyTable;
