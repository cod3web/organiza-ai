<script>
	import { pbStore } from './lib/store';
	import Router from 'svelte-spa-router';
	import {routes} from './routes/outsideRoutes';

	pbStore.set('https://cool-art.pockethost.io/');


	console.log(window.location.href);
</script>

<Router {routes} />
