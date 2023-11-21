import { types } from "../../../auth/types/types"


describe('Pruebas en types', () => {

    test('debe regresar estos types', () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })

    })

})