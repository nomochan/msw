// mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json({
        username: 'admin',
        password: 'password'
      })
    )
  }),
]