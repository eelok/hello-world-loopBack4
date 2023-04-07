// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

export class HelloWorldController {
  constructor() { }

  @get('/hello', {
    responses: {
      '200': {
        description: 'this is my new description of Hello World',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  sayHello(): object {
    console.log('yes it was called');
    return {hello: 'Hello World, hello Maria'};
  }
}
