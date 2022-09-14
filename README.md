# Leaflet on SvelteKit (vite)

`leaflet` user the client window information to render a map.  
Hence, on `SSR`, `leaflet` can't get window information from client side, and user get error `window is not defined`.  

There are 2 solutions to import `leaflet` properly.  

1. use `onMount()` to import leaflet.
2. use `vite-plugin-iso-import` package.

The first solution is the simple and well-known method, but you can't use leaflet plugin with it.  

If you need to use leaflet plugin, you need to know how to use `vite-plugin-iso-import`  

# vite-plugin-iso-import

refer repo below.  
https://github.com/bluwy/vite-plugin-iso-import

## Installation
### Install lib
```bash
npm i -D vite-plugin-iso-import
```

### vite.config.js (or vite.config.ts)
```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), isoImport()]
};

export default config;
```
just update about `isoImport`

## Usage
### LeafletMap.svelte
Add `?client` after the package name.  
(If you want to render that package on server side, add `?server`)
```javascript
	import Leaflet from 'leaflet?client';
	import 'leaflet.markercluster?client';
```

## for TypeScript
If you use type script, it ill lose intellisense with package name.  
Update `app.d.ts` file to fix it.  
### app.d.ts
Add below code.
```typescript
declare module 'leaflet?client' {
	import all from 'leaflet'
	export = all
}

declare module '*?client'
declare module '*?server'
```

# onMount 

if you don't want to use `vite-plugin-iso-import` then follow below instruction. 

## Usage
### LeafletMap.svelte
```typescript
import { onMount } from 'svelte';

onMount(async () => {
        if(browser) {
            L = await import('leaflet');
})
```

in this case you can't import leaflet plugins. 