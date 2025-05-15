import type { GitHubProfile } from "../types/github"
import type { TransformedProfile } from "../types/transform"

const transformProfile = (data: GitHubProfile): TransformedProfile => {
	return {
		login: data.login,
		userName: data.name,
		avatarUrl: data.avatar_url,
		bio: data.bio,
		followers: data.followers,
		profileUrl: data.html_url,
	}
}

export default transformProfile
