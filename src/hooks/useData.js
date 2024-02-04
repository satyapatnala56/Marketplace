import { useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useDispatch } from 'react-redux'


import { modelActions } from 'store/model'


axios.defaults.baseURL = 'https://my-json-server.typicode.com';

const fetcher = url => axios.get(url, {
    headers: {
        Accept: "all"
    }
})

const useData = (url) => {
    const dispatch = useDispatch()

    const { data, isLoading, error } = useSWR(url, fetcher, { revalidateOnFocus: false, revalidateIfStale: false })


    useEffect(() => {
        if (data) {
            const duplicate = Array.from({ length: 100 }, (_, i) => {
                const duplicateObj = data.data[i % data.data.length]
                return {
                    ...duplicateObj,
                    name: duplicateObj.name + i,
                    likes: Math.floor(Math.random() * 10000),
                    downloads: Math.floor(Math.random() * 1000)
                }
            })
            dispatch(modelActions.setData({ data: duplicate }))
        }
    }, [data])

    return { isLoading };
};

export default useData;