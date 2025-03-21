import { create } from "zustand"
import toast from "react-hot-toast"
import { axiosInstance} from "../lib/axios"

export const useChatStore = create( (set) => ({
    messages : [] ,
    users : [] ,
    isUsersLoading : false ,
    isMessagesLoading : false ,
    selectedUser : null,
    getUsers : async () => {
        set({isUsersLoading : true});
        try {
            const res = await axiosInstance.get("/message/users");
            set({users : res.data});
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isUsersLoading : false});
        }
    }, 
    getMessages : async (userId) => {
        set({isMessagesLoading : true});
        try {
            const res = await axiosInstance.get(`/message/${userId}`);
            set({messages : res.data});
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            set({isMessagesLoading : false});
        }
    },
}))