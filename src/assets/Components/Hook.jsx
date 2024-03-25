import { useEffect, useState } from "react";

const Hook = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        const fetchdata = async () =>{
            setLoading(true);
            const res = await fetch('/book.json');
            const data = await res.json();
            setData(data);
            setLoading(false);
        }
        fetchdata();
    },[])
    return {data , loading}
};

export default Hook;