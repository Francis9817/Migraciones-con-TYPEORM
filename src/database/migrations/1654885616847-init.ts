import {MigrationInterface, QueryRunner} from "typeorm";

export class init1654885616847 implements MigrationInterface {
    name = 'init1654885616847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_entity" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" character varying NOT NULL, "email" character varying NOT NULL, "telephone" character varying NOT NULL, "course" character varying NOT NULL, CONSTRAINT "PK_d9b0d3777428b67f460cf8a9b14" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_entity"`);
    }

}
