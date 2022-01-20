export class UnexpectedError extends Error {
  constructor () {
    super('Algo errado Aconteceu')
    this.name = 'UnexpectedError'
  }
}
