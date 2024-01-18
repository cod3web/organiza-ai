import Home from '../views/dashboard/Home.svelte';
import Customers from '../views/dashboard/Customers.svelte';

export let routes = {
  '/': Home,
  '/clientes': Customers
}