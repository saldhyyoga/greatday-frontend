import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import cookie from "js-cookie";
import { useHistory } from "react-router-dom";

const token = cookie.get("token");

export default function Navbar() {
	let history = useHistory();
	return (
		<div className="container2">
			{!token ? (
				<div className="navbar2">
					<div className="title2">Guest Book - GreatDay</div>

					<Link className="title" to="/">
						<div>
							<FaBook />
							Registrasi Tamu
						</div>
					</Link>

					<Link className="title2" to="/guest-list">
						<div>
							<FaBook />
							Daftar Tamu
						</div>
					</Link>
				</div>
			) : (
				<div className="navbar2">
					<div className="title2">Guest Book - GreatDay</div>

					<Link className="title" to="/">
						<div>
							<FaBook />
							Registrasi Tamu
						</div>
					</Link>

					<Link className="title" to="/guest-list">
						<div>
							<FaBook />
							Daftar Tamu
						</div>
					</Link>

					<Link className="title" to="/find-guest">
						<div>
							<FaBook />
							Cari tamu
						</div>
					</Link>

					<Link className="title2" to="/post">
						<div>
							<FaBook />
							Report
						</div>
					</Link>

					<div
						style={{ cursor: "pointer" }}
						onClick={() => {
							cookie.remove("token");
							window.location.href = "/";
						}}
					>
						Logout
					</div>
				</div>
			)}
		</div>
	);
}
