import { useEffect, useState } from "react";
import { getReadStoredBook } from "../Utilities/Utilities";

const useReadCartHook = () => {
        const [localData , setLocalData] = useState([]);
    
        useEffect(()=>{
            setLocalData(getReadStoredBook());
        }, []);
    
        return { localData };
    
    
    };

export default useReadCartHook;