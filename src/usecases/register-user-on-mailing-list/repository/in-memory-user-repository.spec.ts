import { UserData } from '../../user-data'
import { InMemoryUserRepository } from './in.memory-user.repository'

describe('In memory User repository', () => {
  test('should return null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)
    const user = await sut.findUserByEmail('any@email.com')
    expect(user).toBeNull()
  })

  test('should return user if is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any-name'
    const email = 'any@email.com'
    const sut = new InMemoryUserRepository(users)
    await sut.add({ name, email })
    const user = await sut.findUserByEmail('any@email.com')
    expect(user.name).toBe('any-name')
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [{ name: 'any-name', email: 'any@email.com' },
      { name: 'second-name', email: 'second@email.com' }]
    const sut = new InMemoryUserRepository(users)
    const returnedUsers = sut.findAllUsers()
    expect((await (returnedUsers)).length).toBe(2)
  })
})
