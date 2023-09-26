import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const donation = useLoaderData();
  const checkDonation = JSON.parse(localStorage.getItem("donate"));

  const total = Number(donation?.length);
  const amount = Number(checkDonation?.length);
  console.log(total, "total", amount, "amount");
  const available = Number(total - amount);
  console.log(available, "available");

  const data = [
    { name: "Total Available Donation", value: available },
    { name: "Your Donation", value: amount },
  ];

  const COLORS = ["#0088FE", "#00C49F"];
  return (
    <div>
      Statistics
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;

// const Statistics = () => {
//

//   // console.log(donation, "donation from loader");
//   // console.log(checkDonation, "from stats");

//   // const data01 = [
//   //   // {
//   //   //   name: "Your donation",
//   //   //   value: `${amount}`,
//   //   // },
//   //   // {
//   //   //   name: "Total Available Donation ",
//   //   //   value: `${available}`,
//   //   // },
//   //   {
//   //     name: "Your donation",
//   //     value: 8,
//   //   },
//   //   {
//   //     name: "Total Available Donation ",
//   //     value: 4,
//   //   },
//   // ];

//   // const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   const total = ((donation?.length * 100) / donation?.length).toFixed(2);
//   //   console.log(total, "total from stats");

//   //   const amount = ((checkDonation?.length * 100) / donation?.length).toFixed(
//   //     2
//   //   );
//   //   console.log(amount, "amount from stats");

//   //   const available = (total - amount).toFixed(2);
//   //   console.log(available, "available from stats");

//   //   const data01 = [
//   //     {
//   //       name: "Your donation",
//   //       value: `${amount}`,
//   //     },
//   //     {
//   //       name: "Total Available Donation ",
//   //       value: `${available}`,
//   //     },
//   //   ];
//   //   console.log(data01, "data from stats");
//   //   console.log(data01, "main data");
//   //   setData(data01);
//   // }, [checkDonation?.length, donation?.length]);

//
// //   render() {
//   return (
//     <div>
//       {/* <PieChart width={730} height={250}>
//         <Pie
//           data={data}
//           // dataKey={data.value}
//           // nameKey={data.name}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           outerRadius={50}
//           fill="#8884d8"
//           label
//         ></Pie>
//       </PieChart> */}
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             label={renderCustomizedLabel}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//           >
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//               />
//             ))}
//           </Pie>
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
//             }
// // };

// Statistics.propTypes = {};

// export default Statistics;
