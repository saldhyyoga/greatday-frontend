import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {
	Col,
	Card,
	CardBody,
	CardTitle,
	Form,
	Label,
	Input,
	Button,
} from "reactstrap";
import { FaRegHandPointUp } from "react-icons/fa";
import axios from "axios";
import { baseURL } from "../../helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState("Laki-laki");
	const [address, setAddress] = useState("");
	const [office, setOffice] = useState("");
	const [tujuan, setTujuan] = useState("");

	const submitData = async (e) => {
		e.preventDefault();
		try {
			const result = await axios.post(`${baseURL}/api/v1/visitor/add`, {
				name: name,
				phonenumber: phone,
				address: address,
				office: office,
				email: email,
				tujuan: tujuan,
				gender: gender,
			});
			if (result.data.data) {
				toast.success("Success Add Data!", {
					onClose: () => (window.location.href = "/guest-list"),
				});
			} else {
				toast.error("Error", {
					onClose: () => (window.location.href = "/login"),
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={1000}
				draggable={false}
				hideProgressBar={true}
			/>
			<Navbar />
			<div style={{ marginLeft: 70, marginTop: 30 }}>
				<Col lg={10}>
					<Card>
						<CardBody>
							<CardTitle tag="h5">
								<FaRegHandPointUp />
								Registrasi Tamu
							</CardTitle>
						</CardBody>
						<center>
							<CardBody>
								<Form onSubmit={submitData}>
									<div style={{ display: "flex", flexDirection: "row" }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="exampleEmail"
											>
												Name
											</Label>
										</div>
										<Input
											onChange={(e) => setName(e.target.value)}
											className="w-25"
											type="text"
											name="name"
											id="exampleEmail"
											placeholder="Isi nama lengkap"
										/>
									</div>
									<div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="phone"
											>
												Phonenumber
											</Label>
										</div>
										<Input
											onChange={(e) => setPhone(e.target.value)}
											className="w-25"
											type="number"
											name="phone"
											id="phone"
										/>
									</div>
									<div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="email"
											>
												Email
											</Label>
										</div>
										<Input
											onChange={(e) => setEmail(e.target.value)}
											className="w-25"
											type="email"
											name="email"
											id="email"
										/>
									</div>
									<div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="kelamin"
											>
												Jenis Kelamin
											</Label>
										</div>
										<Input
											className="w-25"
											type="select"
											onChange={(e) => setGender(e.target.value)}
										>
											<option value="Laki-laki">Laki-laki</option>
											<option value="Perempuan">Perempuan</option>
										</Input>
									</div>
									<div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="alamat"
											>
												Alamat
											</Label>
										</div>
										<Input
											onChange={(e) => setAddress(e.target.value)}
											className="w-25"
											type="text"
											name="alamat"
											id="exampleEmail"
											placeholder="Isi alamat lengkap"
										/>
									</div>
									<div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="office"
											>
												Kantor / Instansi
											</Label>
										</div>
										<Input
											onChange={(e) => setOffice(e.target.value)}
											className="w-25"
											type="text"
											name="office"
											id="office"
										/>
									</div>
									<div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
										<div style={{ width: 130, marginBottom: 10 }}>
											<Label
												style={{ marginTop: "auto", marginBottom: "auto" }}
												for="tujuan"
											>
												Tujuan
											</Label>
										</div>
										<Input
											onChange={(e) => setTujuan(e.target.value)}
											className="w-25"
											type="textarea"
											name="tujuan"
											id="tujuan"
										/>
									</div>
									<div
										style={{
											marginLeft: 100,
											display: "flex",
											flexDirection: "row",
											marginTop: 10,
										}}
									>
										<Button color="primary" type="submit">
											Submit
										</Button>
										{/* <Button color="danger" style={{ marginLeft: 10 }}>
											Reset
										</Button> */}
									</div>
								</Form>
							</CardBody>
						</center>
					</Card>
				</Col>
			</div>
			<ToastContainer />
		</div>
	);
}
