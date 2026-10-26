// Companies where our advisors have operated. Shown as text only, never logos.
// Home's experience strip and About's showcase both read from this list.

export type ExperienceTag = 'Fortune 50' | 'Hypergrowth' | 'Startup' | 'Nonprofit'

export interface Company {
	name: string
	tag?: ExperienceTag
}

// Tags are kept for later use and stay hidden unless this is switched on.
export const showExperienceTags = false

export const companies: Company[] = [
	{ name: 'Apple', tag: 'Fortune 50' },
	{ name: 'JPMorgan Chase', tag: 'Fortune 50' },
	{ name: 'WeWork', tag: 'Hypergrowth' },
	{ name: 'CloudKitchens', tag: 'Hypergrowth' },
	{ name: 'Opensignal', tag: 'Startup' },
	{ name: 'Blitzy', tag: 'Startup' },
	{ name: 'Allwhere', tag: 'Startup' },
	{ name: 'Barkbus', tag: 'Startup' },
	{ name: 'TESF', tag: 'Nonprofit' },
]
