const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')
const UserCreateService = require('./UserCreateService')

it ('user should be create', async () => {
    const user = {
        name: 'User Test',
        email: 'user@test.com',
        password: '123'
    }

    const userRepositoryInMemory = new UserRepositoryInMemory()
    const userCreateService = new UserCreateService(userRepositoryInMemory)
    const userCreated = await userCreateService.execute(user)

    // console.log(userCreated)
    
    expect(userCreated).toHaveProperty('id')
})