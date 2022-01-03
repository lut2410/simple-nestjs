import {MigrationInterface, QueryRunner} from "typeorm";

export class breed21641226162388 implements MigrationInterface {
    name = 'breed21641226162388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" ADD "breed2" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dog" ALTER COLUMN "breed" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dog" ALTER COLUMN "breed" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dog" DROP COLUMN "breed2"`);
    }

}
