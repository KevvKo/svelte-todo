
{#if show}
    <div on:keydown={handleKeyDown} class='absolute top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-40'>
        <div class='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white rounded'>
            <div>
                <button on:click={onClose} class='pb-2 mt-2 ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                </button>
            </div>
            <form on:submit={ callback(inputValue) } class='m-4'>
                {#if deleteDialog}
                    <div class='m-3 inline-block font-semibold text-gray-700'> Are you sure?</div>
                    <button 
                    class='ml-2 bg-red-500 p-2 hover:bg-red-700 transition duration-200 text-white rounded' 
                >Delete</button>
                {:else}
                    <input on:keypress={ handleChange }
                    class='ml-1 mb-2 pl-2 py-2 rounded focus:ring-2 ring-2 ring-purple-400 focus:ring-purple-500 focus:outline-none' 
                    placeholder='Enter a new ToDo' 
                    type='text'
                    bind:this={input}
                    >
                    <button 
                    class='ml-2 bg-green-500 p-2 hover:bg-green-700 transition duration-200 text-white rounded' 
                >confirm</button>
                {/if}
            </form>
        </div>
    </div>
{/if}
<script>
    import { onMount } from 'svelte';
    // props
    export let show = false;
    export let callback;
    export let deleteDialog=false;
    export let onClose;
    let input;
    let inputValue;

    onMount(() => {
        if(input){
            input.focus()
        } 
    })

    const handleKeyDown = (e) => {
        if(e.key === 'Escape'){
            onClose()
        }
        if(e.key === 'Enter'){
      
            if(inputValue){
                callback(inputValue);
            } else{
                 onClose();
            }
        }

    }

    const handleChange = (e) => {
        inputValue = e.target.value;

    }

</script>