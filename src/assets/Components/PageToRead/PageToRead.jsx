/* eslint-disable react/prop-types */
import {
  Tooltip,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Hook from "../Hook";
import { useEffect, useState } from "react";
import { getReadStoredBook } from "../../Utilities/Utilities";
import { Helmet } from "react-helmet-async";

const PageToRead = () => {
  const { data } = Hook(); // eikhane niche data name arekta

  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const saveRead = getReadStoredBook();
    if (data.length > 0) {
      const newRead = [];
      for (const id of saveRead) {
        const newData = data.find((all) => all.id === id);
        newRead.push(newData);
      }
      setCarts(newRead);
    }
  }, [data]);

  // Create new data for the chart
  const readData = carts.map((cart) => ({
    name: cart.bookName,
    Pages: cart.totalPages,
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  // Custom shape for the bars
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  // Custom shape component
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <Helmet>
        <title>Book Vibe Pages to Read</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <BarChart
        data={readData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50, // Increased to accommodate XAxis labels
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          angle={-11}
          interval={0}
          fontSize={10}
          textAnchor="end"
        />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="Pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {colors.map((color, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PageToRead;
