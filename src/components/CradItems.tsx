const CardItems = () => {
	return (
		<div className="rounded-[10px] flex w-[26rem] h-[16rem] flex-col p-4  bg-[var(--backcolor-header-card)] gap-8">
			<div className="flex text-[var(--font-base-text)] justify-between">
				<span className="text-xl font-bold  text-[var(--font-default)]">
					JavaScript data types and data structures
				</span>
				<span className="text-sm text-[var(--font-base-span)] text-nowrap">Há 1 dia</span>
			</div>
			<div>
				<p className="text-[var(--font-base-text)]">
					Programming languages all have built-in data structures, but these
					often differ from one language to another. This article attempts to
					list the built-in data structures available in{" "}
				</p>
			</div>
		</div>
	)
}

export default CardItems
