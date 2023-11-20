import { Route, Routes, Navigate } from "react-router-dom"


import { LoginPage } from "../auth"
import { Navbar } from "../ui"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PrublicRoute } from "./PublicRoute"





export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path="login" element={<LoginPage />} /> */}

                <Route path='/login' element={
                    <PrublicRoute>
                        <LoginPage />
                    </PrublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}
