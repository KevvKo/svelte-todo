<header class='bg-purple-500 text-white p-2 flex'>
    <span class='font-semibold'>
        Svelte-ToDo        
    </span>
    <a class='ml-auto' href='https://github.com/KevvKo/svelte-todo'>
        <img src='/GitHub-Mark-Light-32px.png' alt='Github'>
    </a>
</header>

{#if !toDos}
    <Loading />
{:else}
    <!-- block to render todos -->
    <div class='w-11/12 m-auto mt-10 p-2'>

        {#if $toDoStore.length === 0}
            <!-- empty todos -->
            <div class='text-lg text-center'>
                Everything almoste done!
            </div>
        {:else}
                <h1 class='bg-purple-500 text-white font-medium rounded p-2'> To Do´s</h1>

                    <ul class='mb-5'>
                        {#each $toDoStore as todo }
                            <ToDo description={todo.text} />
                        {/each}
                    </ul>

        {/if}
        <AddToDo />
    </div>
{/if}

<script>
	import { onMount, setContext } from 'svelte';
    import { writable } from 'svelte/store';

    import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
    import { setClient, query } from "svelte-apollo";
    // Components
    import ToDo from '../components/toDo/ToDo.svelte';
    import AddToDo from '../components/addToDo/AddToDo.svelte';
    import Loading from '../components/loading/Loading.svelte';
    // GQL
    import { TODOS_QUERY } from '../graphql/toDoQuerys';

    let toDos = []
    let toDoStore = writable(toDos); 

    $: toDoStore.set(toDos)
    setContext('toDos', toDoStore);

    const httpLink = createHttpLink({
        uri: 'http://localhost:4000'
    });

 
    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });

    setClient(client);

    const data = query(TODOS_QUERY)

    onMount( async () => {
        const result = await data.result()
        if(result.data ){
           toDos = result.data.todos ;
        }
    });

</script>

<style global>
    @import '../css/styles.css';
</style>