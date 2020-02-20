const options = [
  { key: "1", value: "LU", text: "Lunch" },
  { key: "2", value: "DI", text: "Dinner" }
];

const days = [
  { key: "1", value: "Mon", text: "Monday" },
  { key: "2", value: "Tue", text: "Tuesday" },
  { key: "3", value: "Wed", text: "Wednesday" },
  { key: "4", value: "Thu", text: "Thursday" },
  { key: "5", value: "Fri", text: "Friday" },
  { key: "6", value: "Sat", text: "Saturday" },
  { key: "7", value: "Sun", text: "Sunday" }
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

export function getDays() {
  const dayList = days.map(d => d.text);
  return dayList;
}

export function getOptions() {
  return options.map(o => o.text);
}

export function getMealOptions() {
  return mealOptions.map(m => m.text);
}
