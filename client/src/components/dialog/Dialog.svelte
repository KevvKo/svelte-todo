
{#if show}
<div class='absolute top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-40'>
    <div class='p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white rounded'>
        <form on:submit={ callback(inputValue) }>
            <input on:change={ handleChange }
               class='py-2 ml-2 px-1 rounded focus:ring-2 ring-2 ring-purple-400 focus:ring-purple-500 focus:outline-none' 
               placeholder='whats next?' 
               type='text'
            >
            <button 
                class='ml-2 bg-green-500 p-2 hover:bg-green-700 transition duration-200 text-white rounded' 
            >confirm</button>
        </form>
    </div>
</div>
{/if}
<script>
    // props
    export let show = false;
    export let callback;
    let inputValue;

    const handleChange = (e) => {
        inputValue = e.target.value
    }
</script>