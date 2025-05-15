import { useEffect, useState } from "react"
import { axiosGitHub } from "../api/github"
import transformProfile from "../transformers/transformerProfile"
import type { TransformedProfile } from "../types/transform"

const useProfile = () => {
	const [profile, setProfile] = useState<TransformedProfile | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const userName = import.meta.env.VITE_GITHUB_USER
				const response = await axiosGitHub.get(`/users/${userName}`)
				setProfile(transformProfile(response.data))
			} catch (error) {
				console.error("Erro ao buscar o perfil", error)
			} finally {
				setLoading(false)
			}
		}

		fetchProfile()
	}, [])

	return { profile, loading }
}

export default useProfile
