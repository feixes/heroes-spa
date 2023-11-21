import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../heroes"



const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))


describe('Pruebas en SearcPage', () => {

    beforeEach(() => jest.clearAllMocks())

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar a batman y el input con el valor de queryString', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const inputValue = screen.getByRole('textbox')

        expect(input.value).toBe('batman')

        const img = screen.getByRole('img')

        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

        const alertDanger = screen.getAllByLabelText('alert-danger')

        expect(alertDanger.style.display).toBe('none')


    })

    test('debe de mostrar un error si no se encuentra el herore (batman123)', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )
        const alertDanger = screen.getAllByLabelText('alert-danger')

        expect(alertDanger.style.display).toBe('')


    })

    test('debe de llamar el navigate a la pantalla nueva', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )
        const inputValue = screen.getByRole('textbox')
        fireEvent.change(inputValue, { target: { name: 'searchText', value: 'superman' } })

        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')


    })


})