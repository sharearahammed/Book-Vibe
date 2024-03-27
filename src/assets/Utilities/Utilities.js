import { toast } from "react-toastify";

const getReadStoredBook = () =>{
    const storedReadBooks = localStorage.getItem('Read-Books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks)
    }
    return[]
}

const saveReadBooks = id =>{
    const storedReadBooks = getReadStoredBook();
    const exists = storedReadBooks.find(storedReadBook => storedReadBook === id);
    if(!exists){
        storedReadBooks.push(id)
        localStorage.setItem('Read-Books', JSON.stringify(storedReadBooks))
        toast.success("Books Added to Read List")
    }
    else{
        toast.error("You have Already Read this Books")
    }
}

export { getReadStoredBook , saveReadBooks }