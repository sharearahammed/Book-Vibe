import { toast } from "react-toastify";
import { getReadStoredBook } from "./Utilities";

const getWishListStoredBook = () =>{
    const storedWishListBooks = localStorage.getItem('Wishlist-Books');
    if(storedWishListBooks){
        return JSON.parse(storedWishListBooks)
    }
    return[]
}

const saveWishListBooks = id =>{
    const storedWishListBooks = getWishListStoredBook();
    const storeReadListBooks = getReadStoredBook();
    const exists = storedWishListBooks.find(storedWishListBook => storedWishListBook === id);
    const ReadData = storeReadListBooks.find(storeReadListBook=>storeReadListBook === id)
    if( !ReadData){
        if(!exists){
        storedWishListBooks.push(id)
        localStorage.setItem('Wishlist-Books', JSON.stringify(storedWishListBooks))
        toast.success("Books Added to WishList")
        }
        else{
            toast.error("Wishlist Already added")
        }
    }
    else{
        toast.error("You have Already Read this Books")
    }
}

export { getWishListStoredBook , saveWishListBooks }