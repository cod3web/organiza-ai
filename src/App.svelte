<script>
	import { pbStore } from './lib/store';
	import Router, { push } from 'svelte-spa-router';
	import {routes} from './routes/outsideRoutes';
  import { beforeUpdate } from 'svelte';

	pbStore.set('https://cool-art.pockethost.io/');

	beforeUpdate(() => {
		if(window.location.pathname == '/' && localStorage.token) {
			push('/app')
		}
	})
	
	
</script>

<Router {routes} />
