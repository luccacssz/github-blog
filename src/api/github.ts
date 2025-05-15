import axios from "axios"

export const axiosGitHub = axios.create({
	baseURL: import.meta.env.VITE_GITHUB_API,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
	},
})
