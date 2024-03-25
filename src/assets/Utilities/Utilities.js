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
        toast.success("Read Book added succesfully")
    }
    else{
        toast.warn("Read Book allready added")
    }
}

export { getReadStoredBook , saveReadBooks }