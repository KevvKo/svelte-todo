export default async function getData ( url ) {
    
   return fetch(url)
    .then( res => {
        if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json() 
    })
    .then( data => {
        return data?.toDos ? data.toDos : []    
    });
};