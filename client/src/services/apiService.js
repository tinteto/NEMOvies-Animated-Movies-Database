 const apiUrl = 'http://localhost:3030';

 export default {
 async getAllItems() {
    const response = await fetch(`${apiUrl}/data/movies`);
    const result = await response.json();
  

    return result;
 },
}

 
 //! get single item by Id
 //(`${apiUrl}/data/collection/itemId`)
 //! create new item
 //(`${apiUrl}/data/collection`) , send payload
 //! update new item
 //(`${apiUrl}/data/collection/itemId`) , send payload
 //!delete item
 //(`${apiUrl}/data/collection/itemId`)
 //! get all comments for an item
 //(`${apiUrl}/data/comments?where=itemId%3D%22${itemId}%22`)
 //!post comment for an item
 // (`${apiUrl}/data/comments`), send payload
 //!get most recent items
 //(`${apiUrl}/data/items?sortBy=_createdOn%20desc`);
 //!search items
 //(`${apiUrl}/data/items?where=name%20LIKE%20%22${query}%22`);