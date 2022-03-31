import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: 'root',
      //password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      synchronize: true,
      flags: [
        '--password root',
      ]
    }),
    CatsModule,
    AuthModule,
    UserModule,
    BookmarkModule
  ],
})
export class AppModule {}
function getConnectionOptions(): any {
  throw new Error('Function not implemented.');
}

