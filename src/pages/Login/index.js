import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import Navbar from "../../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { baseURL } from "../../helpers";
import Cookie from "js-cookie";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const submitData = (e) => {
		e.preventDefault();
		axios
			.post(`${baseURL}/api/v1/sign-in`, {
				username: username,
				password: password,
			})
			.then((result) => {
				if (result.data.token) {
					Cookie.set("token", result.data.token);

					toast.success("Login Success!", {
						onClose: () => (window.location.href = "/guest-list"),
					});
				}
				// else if (result.data.result === "User not found") {
				// 	toast.error(toastError("Password atau email salah"), {
				// 		onClose: () => (window.location.href = "/login"),
				// 	});
				// }
				else {
					toast.error("Email atau password salah", {
						onClose: () => (window.location.href = "/login"),
					});
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={1000}
				draggable={false}
				hideProgressBar={true}
			/>
			<Navbar />
			<div style={{ marginLeft: 70, marginTop: 30 }}>
				<div style={{ display: "flex", flexDirection: "row", color: "#36a7e8" }}>
					<div>
						<FaSignInAlt size={40} />
					</div>
					<div style={{ fontSize: 30, marginLeft: 5 }}>Login</div>
				</div>
				<Col>
					<Form onSubmit={submitData}>
						<FormGroup>
							<Label for="username">Username</Label>
							<Input
								onChange={(e) => setUsername(e.target.value)}
								type="username"
								name="username"
								id="username"
							/>
						</FormGroup>
						<FormGroup>
							<Label for="examplePassword">Password</Label>
							<Input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								name="password"
								id="examplePassword"
							/>
						</FormGroup>
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
						</div>
					</Form>
				</Col>
			</div>
		</>
	);
}
