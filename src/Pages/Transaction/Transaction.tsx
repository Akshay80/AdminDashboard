import React from "react";
import "./transaction.css";
import { Typography } from "@mui/material";
import TransactionTable from "../../Components/Table/TransactionTable";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CircleIcon from "@mui/icons-material/Circle";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import BrandCard from "../../Components/Cards/BrandCard";
const data = [
  {
    name: "January",
    Sales: 4000,
    Spent: 2400,
  },
  {
    name: "February",
    Sales: 3000,
    Spent: 1398,
  },
  {
    name: "March",
    Sales: 2000,
    Spent: 9800,
  },
  {
    name: "April",
    Sales: 2780,
    Spent: 3908,
  },
  {
    name: "May",
    Sales: 2918,
    Spent: 3020,
  },
  {
    name: "June",
    Sales: 1890,
    Spent: 4800,
  },
];

const datas = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Transaction(): JSX.Element {
  return (
    <div className="Trasanction">
      <Typography variant="h5" align="center">Balance</Typography>
      <div className="chartDiv">
        <div className="barStack">
          <Typography variant="subtitle1" className="subTitle">
            Monthly Balance Overview
          </Typography>
          <BarChart height={260} width={700} data={data}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" stackId="a" fill="#1a2abe" />
            <Bar dataKey="Spent" stackId="b" fill="#f71616" />
          </BarChart>
        </div>

        <div className="pieChart">
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Balance Statistics
          </Typography>
          <PieChart height={200} width={300}>
            <Pie
              data={datas}
              //   cx={120}
              //   cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {datas.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="PieLegendss">
            <Typography variant="subtitle2">
              <CircleIcon style={{ color: "#0088FE", fontSize: 10 }} />
              &nbsp;Mastercard
            </Typography>
            <Typography variant="subtitle2">
              <CircleIcon style={{ color: "#00C49F", fontSize: 10 }} />
              &nbsp;Webmoney
            </Typography>
            <Typography variant="subtitle2">
              <CircleIcon style={{ color: "#FFBB28", fontSize: 10 }} />
              &nbsp;Paypal
            </Typography>
            <Typography variant="subtitle2">
              <CircleIcon style={{ color: "#FF8042", fontSize: 10 }} />
              &nbsp;Qiwi
            </Typography>
          </div>
          
        </div>
        
      </div>
      <div className="cardBrand">
  <BrandCard />
</div>
      <div className="tableContainer">
        <div className="mainTable">
          <div className="tableTitleContainer">
            <div className="tableTitle">
              <Typography variant="subtitle1" fontWeight="bold">
                Transactions
              </Typography>
            </div>
            <div className="tableMonth">
              <Typography variant="subtitle2" color="action" fontWeight="bold">
                This Month
              </Typography>
            </div>
          </div>
          <TransactionTable />
        </div>

        <div className="expenses">
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            {" "}
            Income / Expense{" "}
          </Typography>

          <div className="expenseContainer">
            <div className="expenseImage">
              <ArrowDownward className="iconDown" />
            </div>
            <div className="expenseText">
              <Typography variant="h5">$22,578.00</Typography>
              <Typography variant="body1" color="GrayText">
                Total amount expense
              </Typography>
            </div>
          </div>

          <div className="incomeContainer">
            <div className="incomeImage">
              <ArrowUpward className="iconUp" />
            </div>
            <div className="incomeText">
              <Typography variant="h5">$5,783.00</Typography>
              <Typography variant="body1" color="GrayText">
                Total amount income
              </Typography>
            </div>
          </div>

          <div className="expenseContainer">
            <div className="expenseImage">
              <ArrowDownward className="iconDown" />
            </div>
            <div className="expenseText">
              <Typography variant="h5">$13,231.00</Typography>
              <Typography variant="body1" color="GrayText">
                Total amount expense
              </Typography>
            </div>
          </div>

          <div className="expenseContainer">
            <div className="expenseImage">
              <ArrowDownward className="iconDown" />
            </div>
            <div className="expenseText">
              <Typography variant="h5">$74,944.00</Typography>
              <Typography variant="body1" color="GrayText">
                Total amount expense
              </Typography>
            </div>
          </div>

          <div className="incomeContainer">
            <div className="incomeImage">
              <ArrowUpward className="iconUp" />
            </div>
            <div className="incomeText">
              <Typography variant="h5">$83,284.00</Typography>
              <Typography variant="body1" color="GrayText">
                Total amount income
              </Typography>
            </div>
          </div>
        </div>




      </div>
      
    </div>
  );
}
