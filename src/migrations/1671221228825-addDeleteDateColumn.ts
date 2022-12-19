import { MigrationInterface, QueryRunner } from "typeorm";

export class addDeleteDateColumn1671221228825 implements MigrationInterface {
    name = 'addDeleteDateColumn1671221228825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity" DROP COLUMN "deletedAt"`);
    }

}
