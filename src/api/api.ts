import axios, {AxiosResponse} from "axios";

type DateResponseType<T> = {
    data: T,
    message: Array<string>
    resultCode: number
}
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
    getProfile(userId: number) {
        console.warn("Obsolete method. Please, use profileAPI object")
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}
export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

