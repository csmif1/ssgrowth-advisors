// Growth stages by annual revenue (annual budget for nonprofits).
// Home's stages section, the contact form and the assessment all read from this list.

export interface Stage {
	label: string
	range: string
	slug: string
	spoken: string
	gotYouHere: string
	takesYouThere: string
}

export const stages: Stage[] = [
	{
		label: '0→1',
		range: 'Pre-revenue to $1M',
		slug: '0-1',
		spoken: '0 to 1',
		gotYouHere: 'An idea and a founder who can sell it.',
		takesYouThere: 'A clear position, a first sales motion, and customers who prove it.',
	},
	{
		label: '1→10',
		range: '$1M to $10M',
		slug: '1-10',
		spoken: '1 to 10',
		gotYouHere: 'The founder closing every deal.',
		takesYouThere: 'A repeatable sales engine and the first hires to run it.',
	},
	{
		label: '10→50',
		range: '$10M to $50M',
		slug: '10-50',
		spoken: '10 to 50',
		gotYouHere: 'A small team that did a bit of everything.',
		takesYouThere: 'Managers, processes, and systems that work without the founder in the room.',
	},
	{
		label: '50+',
		range: '$50M and up',
		slug: '50-plus',
		spoken: '50 plus',
		gotYouHere: 'A core business that works.',
		takesYouThere: 'New markets, new products, and the systems and AI to stay agile at scale.',
	},
]

// The extra choice offered wherever someone picks a stage.
export const notSureOption = { label: 'Not sure', slug: 'not-sure' }
