import { render, screen } from "@testing-library/react"
import { PublicRoute } from '../../router/PublicRoute'
import { AuthContext } from "../../auth"
import { MemoryRouter, Routes, Route } from "react-router-dom"


describe('Pruebas en PublicRoute', () => {

    test('debe de mostrar el children si no está autenticado', () => {

        const contextValue = { logged: false }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </ AuthContext.Provider>
        )

        expect(screen.getByText("Ruta Pública")).toBeTruthy()
    })

    test('debe de navegar si está autenticado', () => {
        const contextValue = {
            logged: false,
            user: {
                name: "Xavi",
                id: 123
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>

                    <Routes>
                        <Route path='/login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />

                        <Route path='/marvel' element={<h1>Esto es la página de marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </ AuthContext.Provider>
        )

        expect(screen.getByText('Esto es la página de marvel')).toBeTruthy()

    })



})