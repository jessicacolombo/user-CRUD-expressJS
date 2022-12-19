import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120, type: "varchar" })
  name: string;

  @Column({ length: 120, type: "varchar", unique: true })
  email: string;

  @Column({ length: 120, type: "varchar" })
  password: string;

  @Column({ type: "boolean" })
  isAdm: boolean;

  @Column({ default: true, type: "boolean" })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  encryptPassword() {
    this.password = hashSync(this.password, 10);
  }
}
