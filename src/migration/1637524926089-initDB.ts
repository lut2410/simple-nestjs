import {MigrationInterface, QueryRunner} from "typeorm";

export class initDB1637524926089 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // createDatabase({ifNotExist: true, characterSet: "UTF8"});//TODO:CHECK ORM EXTESTION
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await dropDatabase({ifExist: true});
    }

}
