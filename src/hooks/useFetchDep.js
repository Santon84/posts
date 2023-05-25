import { useEffect, useState } from "react"
import axios from "axios"

/**
 * 
 * @param {string} url 
 * @param {boolean} depends 
 * @returns { data, error, loading }
 */
export default function useFetchDep(url, depends){
    
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (depends) {
        (
        async function(){
                try{
                    console.log('start loading')
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                    console.log(response.data)
                    
                }catch(err){
                    setError(err)
                }finally{
                    setTimeout(() => setLoading(false),1000)
                    
                }
            }
        )()}
    }, [url,depends])
    
    return { data, error, loading }

}