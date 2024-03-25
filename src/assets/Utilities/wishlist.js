import { toast } from "react-toastify";

const getWishListStoredBook = () =>{
    const storedWishListBooks = localStorage.getItem('Wishlist-Books');
    if(storedWishListBooks){
        return JSON.parse(storedWishListBooks)
    }
    return[]
}

const saveWishListBooks = id =>{
    const storedWishListBooks = getWishListStoredBook();
    const exists = storedWishListBooks.find(storedWishListBook => storedWishListBook === id);
    if(!exists){
        storedWishListBooks.push(id)
        localStorage.setItem('Wishlist-Books', JSON.stringify(storedWishListBooks))
        toast.success("Wishlist added succesfully")
    }
    else{
        toast.warn("Wishlist allready added")
    }
}

export { getWishListStoredBook , saveWishListBooks }