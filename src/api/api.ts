import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "af7f2879-c3e2-4926-80ff-23abea81785c"
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
                console.log("I wana get response.data" + response.data.items)
                return response.data;
            })
        )
    },
    follow(userId: number) {
        return instance.post<number, AxiosResponse<DateResponseType<{}>>>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<number, AxiosResponse<DateResponseType<{}>>>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
}

type DateResponseType<T> = {
    data: T,
    message: Array<string>
    resultCode: number
}