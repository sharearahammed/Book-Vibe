import { useEffect, useState } from "react";
import Hook from "../Hook";
import { getWishListStoredBook } from "../../Utilities/wishlist";
import WishlistCart from "./WishlistCart";

const WishListBook = () => {

    const {data} = Hook();

    const [wishListBooks , setWishListBooks] = useState([]);
    useEffect(()=>{
        const storedWishListBook = getWishListStoredBook();
        if(data.length > 0){
            const newStoredWishListBook = [];
            for(const id of storedWishListBook){
                const book = data.find(item=>item.id === id);
                if(book){
                    newStoredWishListBook.push(book);
                }
            }
            setWishListBooks(newStoredWishListBook)
        }
    },[data])


    return (
        <div>
            
            <div className="mt-[32px] flex flex-col gap-[24px]">
                {
                    wishListBooks.map(wishlist =><WishlistCart key={wishlist.id} wishlist={wishlist}></WishlistCart>)
                }
            </div>
        </div>
    );
};

export default WishListBook;