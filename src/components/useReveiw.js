import { useEffect, useState } from 'react';

const useReveiw = (product) => {
    const [productReveiw,setProductReveiw] = useState([]);
    
    useEffect(() => {
        fetch("product-reveiw.json")
        .then(response => response.json())
        .then(data => setProductReveiw(data))
    },[product]);

    return [productReveiw,setProductReveiw];
};

export default useReveiw;