// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface PageError {}
	// interface Platform {}
}


declare module 'leaflet?client' {
	import all from 'leaflet'
	export = all
}

declare module '*?client'
declare module '*?server'