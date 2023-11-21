import { render, screen } from "@testing-library/react"
import { AppRouter } from '../../router/AppRouter'
import { AuthContext } from "../../auth"
import { MemoryRouter, Routes, Route } from "react-router-dom"


describe('Pruebas en AppRouter', () => {
    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)
    })

    test('debe de mostrar el componente de Marvel si está autenticado', () => {
        const contextValue = {
            logged: false,
            user: {
                name: 'Paco',
                id: 123
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    })
})