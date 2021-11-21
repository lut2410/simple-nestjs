import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    DogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
   constructor(private connection: Connection) {}
  }