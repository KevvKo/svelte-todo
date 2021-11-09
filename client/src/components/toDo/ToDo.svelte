<li class='rounded px-2 flex p-1'>
    <span class='font-medium text-gray-700'>
        {description}
    </span>
    <!-- edit icon -->
    <button class='ml-auto mr-1 hover:bg-purple-300 p-1 duration-100 rounded' on:click={ handleShowEdit }>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
    </button>
    <!-- delete icon -->
    <button class='hover:bg-red-300 duration-75 p-1 rounded' on:click={ handleShowDelete }>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    </button>
</li>
{#if showDeleteDialog}
    <Dialog 
        callback={ deleteCallback } 
        show={showDeleteDialog}
        deleteDialog
        onClose={handleShowDelete}
    />
{/if}
{#if showEditDialog}
    <Dialog 
        callback={ editCallback}
        show={showEditDialog}
        onClose={handleShowEdit}
    />
{/if}
<script>
    import { getContext } from 'svelte';
    import Dialog from "../dialog/Dialog.svelte";
    import { mutation } from "svelte-apollo";
    import { DELETE_TODO } from '../../graphql/toDosMutation';
    import { EDIT_TODO } from '../../graphql/toDosMutation';
    
    export let description;
    let showEditDialog = false;
    let showDeleteDialog = false;
    let toDos = getContext('toDos');

    const editToDo = mutation(EDIT_TODO);
    const deleteToDo = mutation(DELETE_TODO);

    const handleShowEdit = () => {
        showEditDialog = !showEditDialog;
    }

    const handleShowDelete = () => {
        showDeleteDialog = !showDeleteDialog;
    }

    const editCallback = async (value) =>{
        handleShowEdit();
        try{
            await editToDo({
                variables: {
                    oldText: description,
                    newText: value
                }
            })
            const newArray = $toDos.map( element => {
                const newObject = {};

                element.text === description 
                    ? newObject.text = value
                    : newObject.text = element.text

                return newObject
            });
            toDos.set( newArray );

        } catch {
            alert('Something went wrong');
        }
    }

    const deleteCallback = async () =>{
        handleShowDelete();
        try {
            const { data } = await deleteToDo({
                variables: {
                    text: description
                }
            });
            const action = data.deleteToDo;
            const newArray = $toDos.filter( element => element.text !== action.text );
            toDos.set( newArray );
        } catch {
            alert('Deletion was not possible');
        }
    }

</script>