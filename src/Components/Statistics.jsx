import { Chart } from "react-google-charts";
const Statistics = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Available donations", 12],
    ["Your donations", 2],
  ];

  const options = {
    title: "Your donations Stats",
  };

  return (
    <div>
      <Chart
        className="text-xl"
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
