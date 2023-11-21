import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../auth"
import { Navbar } from "../../../ui"
import { screen, render, fireEvent } from "@testing-library/react"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en Navbar', () => {

    const contextValue = {
        logged: false,
        user: {
            name: "Bonaventura"
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostar el nombre del usuario', () => {



        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Bonaventura')).toBeTruthy()
    })

    test('debe de llamar el logout y navigate cuando se hace click en el boton de logout', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button')

        fireEvent.click(logoutBtn)

        expect(contextValue.logout).toHaveBeenCalled()

        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true })


    })

})