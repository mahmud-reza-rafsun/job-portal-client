/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    useEffect(() => {
        axiosInstance.interceptors.response.use(response =>{
            return response;
        }, (err) => {
            if(err.status === 401 || err.status === 403){
                signOutUser()
                .then(() => {
                    toast.error('unAuthorized access token ')
                })
                .catch(error => {
                    toast.error(error.message);
                })
            }
            return Promise.reject(err);
        })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;