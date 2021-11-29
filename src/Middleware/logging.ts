import { Plugin } from '@nestjs/graphql';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart(): Promise<GraphQLRequestListener> {
    console.log('Request started');
    return {
      async willSendResponse(requestContext) {
        console.log('Will send response');
        // console.log(requestContext);
      },
      async parsingDidStart(requestContext) {
        console.log('Parsing started!');
      },

      async validationDidStart(requestContext) {
        console.log('Validation started!');
        // console.log(requestContext);
      },
      async didResolveOperation(requestContext) {
        console.log('ResolveOperation done!');
      },
      async willResolveField(requestContext) {
        console.log('ResolveField started!');
      },
    };
  }
}