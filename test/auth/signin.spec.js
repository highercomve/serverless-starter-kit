import { signinHandler } from '../../src/auth/signin'
import { describe } from 'ava-spec'

describe('Authentication', it => {
  it('Return error if email and password don\'t exist on body', t => {
    const JSONBody = JSON.stringify({
    })
    signinHandler({ body: '{}' }, {}, (error, result) => {
      const resultBody = JSON.parse(result.body);
      t.not(resultBody.token, null)
    })
  })
})
