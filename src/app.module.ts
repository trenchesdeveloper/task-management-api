import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'damilare',
      password: 'root',
      database: 'taskmanagement',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
