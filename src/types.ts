export interface Pacman {
	x: number;
	y: number;
	direction: string;
	points: number;
	totalPoints: number;
	deadRemainingDuration: number;
	powerupRemainingDuration: number;
}

export type GhostName = 'blinky' | 'clyde' | 'inky' | 'pinky';
export interface Ghost {
	x: number;
	y: number;
	name: GhostName;
	scared: boolean;
	target?: { x: number; y: number };
}

export interface Contribution {
	date: Date;
	count: number;
}

export interface StoreType {
	frameCount: number;
	contributions: Contribution[];
	pacman: Pacman;
	ghosts: Ghost[];
	grid: { intensity: number; commitsCount: number }[][];
	monthLabels: string[];
	pacmanMouthOpen: boolean;
	gameInterval: number;
	gameHistory: {
		pacman: Pacman;
		ghosts: Ghost[];
		grid: number[][];
	}[];
	config: Config;
}

export interface Config {
	platform: 'github' | 'gitlab';
	username: string;
	canvas: HTMLCanvasElement;
	outputFormat: 'canvas' | 'svg';
	svgCallback: (blonUrl: string) => void;
	gameOverCallback: () => void;
	gameTheme: ThemeKeys;
	gameSpeed: number;
	enableSounds: boolean;
	pointsIncreasedCallback: (pointsSum: number) => void;
	githubSettings?: {
		accessToken: string;
	};
}

export type ThemeKeys = 'github' | 'github-dark' | 'gitlab' | 'gitlab-dark';

export interface GameTheme {
	textColor: string;
	gridBackground: string;
	contributionBoxColor: string;
	emptyContributionBoxColor: string;
}

export interface AnimationData {
	keyTimes: string;
	values: string;
}
