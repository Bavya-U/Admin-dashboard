// EmployeeTable.js
import React from "react";
import MUIDataTable from "mui-datatables";
import "./DataTable.css"
import Navbar from "../Navbar/Navbar";

const columns = [
  { name: "empcode", label: "EmpCode", options: { filter: true, sort: false } },
  { name: "name", label: "Name", options: { filter: true, sort: false } },
  { name: "date", label: "Date", options: { filter: true, sort: false } },
  { name: "intime", label: "In-Time", options: { filter: true, sort: false } },
  { name: "outtime", label: "Out-Time", options: { filter: true, sort: false } },
  { name: "workhoure", label: "Work-Hour", options: { filter: true, sort: false } },
  { name: "action", label: "Action", options: { filter: true, sort: false } },


];

const data = [  
  {empcode:"101", name: "Joe James", date: "08/07/2024", intime: "9:30", outtime: "6.00",workhoure:"8" },
  {empcode:"102", name: "John Walsh", date: "08/07/2024", intime: "9:30", outtime: "6.00",workhoure:"9" },
  {empcode:"103", name: "Bob Herm", date: "08/07/2024", intime: "9:30", outtime: "6.00",workhoure:"8" },
  {empcode:"104", name: "James Houston", date: "08/07/2024", intime: "9:30", outtime: "6.00",workhoure:"8" },
];

const options = {
  filterType: 'checkbox',
};

const DataTable = () => (
  <div className="">
    <Navbar />
    <h1>EmployeeTable</h1>
  <div className="employee-table-container table-responsive">
  <MUIDataTable
    title={"Employee List"}
    data={data}
    columns={columns}
    options={options}
    />
    </div>
    </div>
);

export default DataTable;
