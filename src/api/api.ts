import axios from "axios";

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
                return response.data;
            })
        )
    }
}
