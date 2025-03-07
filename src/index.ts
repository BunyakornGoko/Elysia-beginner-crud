import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import { note } from './note'
import { user } from './user'

const app = new Elysia()
    .use(swagger())
    .onError(({ error, code }) => { 
      if (code === 'NOT_FOUND') return 'Not Found :('

      console.error(error) 
    }) 
    .use(user)
    .use(note) 
    .listen(3000)