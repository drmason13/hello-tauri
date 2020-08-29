<script lang="ts">
	import type {User} from './Types';
	export let user: User;
</script>

<h1>Hello {user.name}!</h1>
<p>Your name is {user.name.length} letters long.</p>
<p>You identify as {user.gender}.</p>
<p>Your have been alive for {user.age} year{user.age !== 1 ? 's' : ''}.</p>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
