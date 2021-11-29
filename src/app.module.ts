import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { DogModule } from './dog/dog.module';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { LoggingPlugin } from './Middleware/logging';

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join (process.cwd(), 'src/schema.gql'),
      
      debug: false,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    DogsModule,
    DogModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggingPlugin],
})
export class AppModule { 
   constructor(private connection: Connection) {}
  }