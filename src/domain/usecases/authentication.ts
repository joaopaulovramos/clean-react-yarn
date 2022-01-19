import { AccountModel } from '../models/acoount-model'

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
