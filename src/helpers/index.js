import Cookie from "js-cookie";

const baseURL = "https://nodejs-greatday.herokuapp.com";
const token = Cookie.get("token");
const authHeaders = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

export { baseURL, token, authHeaders };
