import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useContext } from "react";

export const NotifyContext = createContext();

export const Alert = ({ children }) => {
  const notify = () =>
    toast.success("Tizimga muvaffaqiyatli o`tildi!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <>
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <NotifyContext.Provider value={{ notify }}>
        {children}
      </NotifyContext.Provider>
    </>
  );
};

export const useNotifyContext = () => useContext(NotifyContext);
