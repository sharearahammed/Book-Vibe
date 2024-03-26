import { useEffect, useState } from "react";
import Hook from "../Hook";
import { getReadStoredBook } from "../../Utilities/Utilities";
import ReadBookCart from "./ReadBookCart";

const ReadBook = () => {

    const {data} = Hook();

    const [readBooks , setReadBooks] = useState([]);
    useEffect(()=>{
        const storedReadBook = getReadStoredBook();
        if(data.length > 0){
            const newStoredReadBook = [];
            for(const id of storedReadBook){
                const book = data.find(item=>item.id === id);
                if(book){
                    newStoredReadBook.push(book);
                }
            }
            setReadBooks(newStoredReadBook)
        }
    },[data])

    return (
        <div>
            
            <div className="mt-[32px] flex flex-col gap-[24px]">
                {
                    readBooks.map(readBook =><ReadBookCart key={readBook.id} readBook={readBook}></ReadBookCart>)
                }
            </div>
        </div>
    );
};

export default ReadBook;