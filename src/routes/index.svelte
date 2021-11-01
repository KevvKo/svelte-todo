<header class='bg-purple-500 text-white p-2 flex'>
    <span class='font-semibold'>
        Svelte-ToDo        
    </span>
    <a class='ml-auto' href='https://github.com/KevvKo/svelte-todo'>
        <img src='/GitHub-Mark-Light-32px.png' alt='Github'>
    </a>
</header>

<div class='w-11/12 m-auto mt-10 p-2'>
    <h1 class='bg-purple-500 text-white font-medium rounded p-2'> To Do´s</h1>
    {#if toDos}
        <ul class='mb-5'>
            {#each toDos as todo }
                <ToDo description={todo} />
            {/each}
        </ul>
    {/if}
    <AddToDo />
</div>

<script>
    import { onMount } from 'svelte';
    // Components
    import ToDo from '../components/toDo/ToDo.svelte';
    import AddToDo from '../components/addToDo/AddToDo.svelte';
    // Utils
    import getData from '../scripts/utils';

    let toDos; 

	onMount( async () => {
        toDos = await getData('../../static/todos.json');
	});

</script>

<style global>
    @import '../css/styles.css';
</style>