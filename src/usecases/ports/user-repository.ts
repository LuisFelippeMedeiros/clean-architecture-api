import { UserData } from '../user-data'

export interface UserRepository {
  add(user: UserData): Promise<void>
  findUserByEmail(email: string): Promise<UserData>
  findAllUsers(): Promise<UserData[]>
  exists(users: UserData): Promise<boolean>
}
