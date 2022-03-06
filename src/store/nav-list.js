import {writable} from 'svelte/store';

let NavList = writable(['Home', 'Skills', 'Projects', 'Contact']);

export default NavList;