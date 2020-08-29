<script lang="ts">
	import Hello from './Hello.svelte';
	
	import type {User} from './Types';
	import {Gender} from './Types';
	const genders = Object.values(Gender);

	let defaultUser: User = {
		name: "Tauri",
		age: 1,
		gender: Gender.Female,
	}

	let rawUser = defaultUser
	let validatedUser: User = defaultUser

	let error = {
		age: "",
	}

	$: {
		if (typeof rawUser.age === 'number' && rawUser.age >= 0 && Number.isInteger(rawUser.age)) {
			validatedUser.age = rawUser.age;
		} else {
			error.age = `Invalid age entered: ${rawUser.age}\n Please enter a positive whole number`
		}
	}
</script>

<main>
	<Hello bind:user={validatedUser} />
	<br/>
	<label>
		Name<input type="text" bind:value={rawUser.name} placeholder="name"/>
	</label>
	<label>
		<input type="number" bind:value={rawUser.age} />
	</label>
	<h3>Gender</h3>
	{#each genders as gender}
		<label>
			{gender.padEnd(20, '.')}<input type="radio" bind:group={rawUser.gender} value={gender}>
		</label>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	label {
		font-family:monospace;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
