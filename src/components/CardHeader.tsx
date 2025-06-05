import useProfile from "../hooks/useProfile"
import Spinner from "./Spinner"

const CardHeader = () => {
	const { profile, loading } = useProfile()

	if (loading || !profile) return <Spinner />

	const { userName, avatarUrl } = profile

	return (
		<div className="flex items-center justify-between p-4 bg-[var(--backcolor-header-card)] rounded-l-md rounded-r-md sm:w-[54rem] sm:h-[12rem] z-10 sm:-mt-16">
			<div className="flex text-[var(--font-default)] gap-4 flex-col sm:flex-row ">
				<div
					className="w-[18rem] h-[8rem] rounded-2xl bg-cover bg-center hidden sm:block"
					style={{ backgroundImage: `url(${avatarUrl})` }}
				/>
				<div className="flex flex-col gap-2 text-sm ">
					<div className="flex w-full justify-between flex-col sm:flex-row">
						<div className="sm:text-2xl font-semibold">{userName}</div>
						<div>Github</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="font-normal text-[var(--font-base-text)]">
							Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
							viverra massa quam dignissim aenean malesuada suscipit. Nunc,
							volutpat pulvinar vel mass.
						</div>
						<div className="flex gap-12">
							<span>cameronwll</span>
							<span>cameronwll</span>
							<span>cameronwll</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CardHeader
