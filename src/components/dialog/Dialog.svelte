
{#if show}
        <input class='py-2 ml-2 px-1 rounded focus:ring-2 ring-2 ring-purple-400 focus:ring-purple-500 focus:outline-none' placeholder='whats next?' type='text'>
        <button class='ml-2 bg-green-500 p-2 hover:bg-green-700 transition duration-200 text-white rounded'>Add</button>
{/if}
<script>
    export let show = false;
</script>