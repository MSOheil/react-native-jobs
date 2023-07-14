
import { useEffect, useState } from "react"
import axios from "axios";




export default function FetchHook() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const FetchData = async () => {
        setIsLoading(true);
        let data = await axios.get(`http://192.168.1.100:7014/api/Jobs/AllJobs`)

            .then((response) => {
                return response.data;
            }).catch((error) => {

                console.log('got error', error);

                setError(error);
            }).finally(() => {
                setIsLoading(false);
            });
        setData(data);
    }
    useEffect(() => {
        setIsLoading(true);
        FetchData();
    }, [])
    const refetch = async () => {
        await setIsLoading(true);
    }
    return { data, isLoading, error, refetch };
}