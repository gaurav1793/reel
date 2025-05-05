import {useQuery} from '@tanstack/react-query'
import { getAllVideos } from '../../../apis/Videos'

export const useFetchAllVidoes = ()=>{
    const {isFetching ,isError ,isFetched ,error,data}= useQuery({
        queryKey:'videos',
        queryFn:getAllVideos,
        cacheTime:0
    })

    return {isFetching ,isError ,isFetched ,error,data}
}