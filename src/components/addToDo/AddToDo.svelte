<div class='flex'>
    <Dialog show={show} />
    <button on:click={handleClick} data-testid='add-button' class='mr-2 ml-auto flex bg-green-500 p-2 hover:bg-green-700 transition duration-200 text-white rounded'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    </button>    
</div>

<script>
    import Dialog from "../dialog/Dialog.svelte";

    let show = false;

    const handleClick = () => {
        show = !show;
    }
</script>