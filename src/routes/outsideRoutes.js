import Login from '../views/Login.svelte'
import DefaultView from '../views/DefaultView.svelte';

export let routes = {
  '/': Login,
  '/app': DefaultView,
  '/app/*': DefaultView
}

