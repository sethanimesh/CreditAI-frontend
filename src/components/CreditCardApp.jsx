import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import RegisterComponent from "./RegisterComponent";
import AuthProvider from "./AuthContext";

export default function CreditCardApp(){
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/register" element={<RegisterComponent/>}></Route>
                        <Route path="/" element={<LoginComponent/>}></Route>
                        <Route path="/login" element={<LoginComponent/>}></Route>
                        <Route path="/welcome/:username" element={<WelcomeComponent/>}></Route>
                        <Route path="*" element={<ErrorComponent/>}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}