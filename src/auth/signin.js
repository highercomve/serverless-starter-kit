// @flow
import {
  APIGatewayEvent,
  Context,
  ProxyCallback
} from '../types/lambda'

// Handlers names must be unique
interface Response {
  statusCode: number;
  body: string;
}

export function signinHandler (event: APIGatewayEvent, context: Context, callback: ProxyCallback) {
  const body = JSON.parse(event.body)
  const test = Object.assign({}, { MONGO_URL: process.env.MONGO_URL, token: 'esto sera el token' }, body)
  const response: Response = {
    statusCode: 200,
    body: JSON.stringify(test)
  }

  callback(null, response)
}
