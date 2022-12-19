import { IUser, IUserRequest, IUserUpdate } from "./../interfaces/users/index";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

export const userWithoutPassword: SchemaOf<IUser> = yup.object().shape({
  id: yup.string(),
  name: yup.string(),
  email: yup.string(),
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
  createdAt: yup.date(),
  updatedAt: yup.date(),
});

export const listOfUsersWithoutPassword: SchemaOf<IUser[]> =
  yup.array(userWithoutPassword);

export const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  password: yup.string().notRequired(),
});
