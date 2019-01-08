import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
} from "typeorm";
import * as uuidv4 from "uuid/v4";

// Note:
// BaseEntity allows us to create and delete users through typeorm
// When we want to create and delete entities then we need to extend BaseEntity

@Entity("users")
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  // email can only be length 255 characters
  @Column("varchar", { length: 255 })
  email: string;

  // password can be any length
  @Column("text")
  password: string;

  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
