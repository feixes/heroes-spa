

import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"


export const PrublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    return (!logged)
        ? children
        : <Navigate to="/marvel" />
}
