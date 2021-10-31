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
    <ul>
        <ToDo description={'eating'} />
        <ToDo description={'shopping'}/>
        <ToDo description={'cleaning'}/>
        <ToDo description={'learn something'}/>
        <ToDo description={'reboot pc'}/>
        <ToDo description={'paint kitchen'}/>
    </ul>
    <AddToDo />
</div>

<script>
    import ToDo from '../components/toDo/ToDo.svelte';
    import AddToDo from '../components/addToDo/AddToDo.svelte';
</script>

<style global>
    @import '../css/styles.css';
</style>