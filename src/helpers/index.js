import Cookie from "js-cookie";
import dayjs from "dayjs";

const baseURL = "https://nodejs-greatday.herokuapp.com";
const token = Cookie.get("token");
const authHeaders = {
	headers: {
		Authorization: `Bearer ${token}`,
	},
};

const dateTime = (item) => {
	let now = dayjs(item).add(7, "h");
	let now2 = now.toString().substr(5, 20);

	return now2;
};

export { baseURL, token, authHeaders, dateTime };
