import { Route, Routes, Navigate } from "react-router-dom"


import { LoginPage } from "../auth"
import { Navbar } from "../ui"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"





export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}
