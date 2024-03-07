import { type AccountModel, type AddAccountModel, type AddAccount, type Encrypter } from './db-add.account.protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    const encryptedPassword = await this.encrypter.encrypt(account.password)
    const newAccount: AccountModel = {
      id: 'algum_id_unico',
      name: account.name,
      email: account.email,
      password: encryptedPassword // Usar a senha criptografada
    }
    return newAccount
  }
}
