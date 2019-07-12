import { APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/**
 * Hello World
 *
 * @param {APIGatewayProxyEvent} event
 * @param {APIGatewayEventRequestContext} context
 * @returns {Promise<APIGatewayProxyResult>}
 */
export async function handler(event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Hello, World!"}),
  }
}