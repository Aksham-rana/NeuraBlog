import {createContext, useContext, useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate}  from 'react-router-dom'
import toast from 'react-hot-toast';

// Set axios baseURL
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const navigate = useNavigate()

    const [token, setTokenState] = useState(localStorage.getItem("token"));
    const [blogs , setBlogs] = useState([])
    const [input, setInput] = useState('')

    // Custom setToken function that updates both state and localStorage
    const setToken = (newToken) => {
        if (newToken) {
            localStorage.setItem("token", newToken);
            axiosInstance.defaults.headers.common['Authorization'] = newToken;
        } else {
            localStorage.removeItem("token");
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
        setTokenState(newToken);
    }

    const fetchBlogs = async ()=>{
        try{
            const {data} = await axiosInstance.get('/api/blog/all');
            if(data.success) {
                setBlogs(data.blogs);
            } else {
                toast.error(data.message);
            }
        }catch(error){
            console.log("Fetch blogs error:", error);
            // Don't show error for initial load
        }
    }

    // Initialize token from localStorage on mount
    useEffect(()=>{
        fetchBlogs();
        const savedToken = localStorage.getItem('token');
        if(savedToken){
            setTokenState(savedToken);
            axiosInstance.defaults.headers.common['Authorization'] = savedToken;
        }
    },[])

    const value = {
        axiosInstance,
        navigate,
        token,
        setToken,
        blogs,
        setBlogs,
        input,
        setInput
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext =  ()=>{
    return useContext(AppContext)
}