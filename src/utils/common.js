
import toast, { toastConfig } from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/dark.css';

export const sendToast = (message) => {
    return toast(message, {
        duration: 2000,
        theme: 'dark',
        position: 'top-right',
        clickable: true,
        clickClosable: true,
        className: 'custom-toast',
    });
}