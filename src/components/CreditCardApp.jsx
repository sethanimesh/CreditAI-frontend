import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";

export default function CreditCardApp(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome" element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}