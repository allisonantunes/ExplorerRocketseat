const UserCreateServices = require('./UserCreateServices')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')
const AppError = require('../utils/AppError')


describe("UserCreateServices", () => {
    let userRepositoryInMemory = null
    let userCreateServices = null

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        userCreateServices = new UserCreateServices(userRepositoryInMemory)
    })

    it("user should be create", async () => {
       const user = {
        name: 'User Test',
        email: 'usertest@teste.com',
        password: '123'
       }

       const userCreated = await userCreateServices.execute(user)
    
       console.log(userCreated);
    
        expect(userCreated).toHaveProperty('id');
    });

    it("user not should be created with exists email", async () => {
        const user1 = {
            name: 'Test',
            email: 'test222@teste.com',
            password: '123'
        }
        const user2 = {
            name: 'Test 2',
            email: 'test222@teste.com',
            password: '123'
        }

        await userCreateService.execute(user1)
       /*  await expect(userCreateService.execute(user2)).rejects.toEqual( new AppError('Este e-mail já está em uso')) */
       expect(async () => {
        await userCreateService.execute(user2)
       }).rejects.toEqual( new AppError('Este e-mail já está em uso'))
    })
})

/* describe('NotesCreateServices', () => {
    it('', () => {

    })
})
 */
