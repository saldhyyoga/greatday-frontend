import axios from "axios";
import React, { useState } from "react";
import { Button, Input, Label, Card } from "reactstrap";
import Navbar from "../../components/Navbar";
import { authHeaders, baseURL } from "../../helpers";
import MUIDataTable from "mui-datatables";

export default function FindGuest() {
	const [data, setData] = useState([]);
	const [name, setName] = useState("");

	const submitData = async () => {
		try {
			const result = await axios
				.get(`${baseURL}/api/v1/visitor/find?name=${name}`, authHeaders)
				.then((res) => setData(res.data.data))
				.catch((err) => console.log(err));
		} catch (error) {
			console.log(error);
		}
	};

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

	const columns = [
		"name",
		"phonenumber",
		"email",
		"gender",
		"address",
		"office",
		"purpose",
		"visit_date",
		"action",
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
					item.createdAt,
					<>
						<Button color="primary">Rating</Button>
					</>,
				];
			});
		}
	};

	return (
		<div>
			<Navbar />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginLeft: 40,
					marginTop: 20,
				}}
			>
				<div style={{ marginRight: 10 }}>
					<Label for="name">Name</Label>
					<Input
						onChange={(e) => setName(e.target.value)}
						value={name}
						id="name"
						type="text"
					/>
				</div>
				<div style={{ marginTop: 22, marginLeft: 10 }}>
					<Button onClick={submitData} color="primary">
						Search
					</Button>
				</div>
			</div>
			<div>
				<Card style={{ marginTop: 20 }}>
					<MUIDataTable data={iterateData()} columns={columns} options={options} />
				</Card>
			</div>
		</div>
	);
}
