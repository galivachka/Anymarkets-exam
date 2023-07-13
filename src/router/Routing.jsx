import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Error, Home, Login } from "../pages/export";
import { Header } from "../components/export";
import  Create  from "../pages/create/Create"
import Add from '../pages/add/Add'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
           <Route path="/create" element={
            <>
            <Header />
            <Create />
            </>
           } />
           
             <Route path="/add" element={
            <>
            <Header />
            <Add />
            </>
           } />

          <Route path="*" element={<Navigate to={"/error"} />} />
          <Route path="/error" element={<Error />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
