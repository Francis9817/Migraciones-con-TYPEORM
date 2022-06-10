import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654885702599 implements MigrationInterface {
    name = 'init1654885702599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_entity" ADD "course1" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_entity" DROP COLUMN "course1"`);
    }

}
