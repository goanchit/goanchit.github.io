import React, { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStateContext } from '../../context/globalContextProvider';

const NotifyToast = () => {
    const state = useContext(GlobalStateContext);

    useEffect(() => {
        console.log(state, "STATE++++++++")
        if (state && state.toast && state.toast.show) {
            toast(state.toast.message)
        }
    }, [state])

    return (
        <>
            <ToastContainer position='top-right' autoClose={2000} hideProgressBar={false} theme='light'/>
        </>
    );
};

export default NotifyToast;