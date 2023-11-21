import { authReducer } from '../../../auth/context/authReducer'
import { types } from '../../../auth/types/types'


describe('Pruebas en el auth reducer', () => {

    test('debe de mostar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})

        expect(state).toEqual({ logged: false })
    })

    test('debe de llamar el login y autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: 123
            }
        }

        const state = authReducer({ logged: false }, action)

        expect(state).toEqual({
            logged: true,
            user: {
                name: "Juan",
                id: 123
            }
        })


    })

    test('deve de llamar el logout y borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            payload: {
                name: 'Juan',
                id: 123
            }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)

        expect(newState).toEqual({ logged: false })

    })

})