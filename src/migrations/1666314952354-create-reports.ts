import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReports1666314952354 implements MigrationInterface {
  name = 'createReports1666314952354';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "reports" (
      "id" SERIAL NOT NULL,
      "approved" boolean NOT NULL DEFAULT false,
      "price" double precision NOT NULL DEFAULT '0',
      "make" character varying,
      "model" character varying,
      "year" integer,
      "lng" integer,
      "lat" integer,
      "mileage" integer,
      "userId" integer,
      CONSTRAINT "PK_d9013193989303580053c0b5ef6" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "reports"
      ADD CONSTRAINT "FK_bed415cd29716cd707e9cb3c09c" FOREIGN KEY ("userId") REFERENCES "users"("id")
      ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "reports" DROP CONSTRAINT "FK_bed415cd29716cd707e9cb3c09c"`,
    );
    await queryRunner.query(`DROP TABLE "reports"`);
  }
}
