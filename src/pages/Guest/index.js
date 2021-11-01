import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { baseURL, dateTime } from "../../helpers";
import MUIDataTable from "mui-datatables";
import { Button, Card } from "reactstrap";
import cookie from "js-cookie";

const token = cookie.get("token");

export default function App() {
	const [total, setTotal] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(`${baseURL}/api/v1/visitor-today`)
			.then((res) => setTotal(res.data.data))
			.catch((err) => console.log(err));

		axios
			.get(`${baseURL}/api/v1/visitors`)
			.then((res) => setData(res.data.data))
			.catch((err) => console.log(err));
	}, []);

	const options = {
		sort: true,
		selectableRows: "none",
		filter: true,
		print: false,
		download: false,
		rowsPerPage: 100,
		draggableColumns: { enabled: true },
		search: true,
		responsive: "standard",
	};

	const columns = token
		? [
				"name",
				"phonenumber",
				"email",
				"gender",
				"address",
				"office",
				"purpose",
				"visit_date",
				"action",
		  ]
		: [
				"name",
				"phonenumber",
				"email",
				"gender",
				"address",
				"office",
				"purpose",
				"visit_date",
		  ];

	const iterateData = () => {
		if (data !== undefined && data !== null) {
			return data.map((item) => {
				return [
					item.name,
					item.phonenumber,
					item.email,
					item.gender,
					item.address,
					item.office,
					item.tujuan,
					dateTime(item.createdAt),
					<>{token ? <Button color="primary">Rating</Button> : null}</>,
				];
			});
		}
	};

	return (
		<>
			<Navbar />
			<center>
				<div style={{ marginLeft: "auto", marginRight: "auto" }}>
					Jumlah tamu hari ini = {total}
				</div>
				<Card style={{ marginTop: 20 }}>
					<MUIDataTable data={iterateData()} columns={columns} options={options} />
				</Card>
			</center>
		</>
	);
}
