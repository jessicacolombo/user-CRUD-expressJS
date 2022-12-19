import { IUserRequest, IUserUpdate } from "./../interfaces/users/index";
import { createUserService } from "./../services/user/createUser.service";
import { Request, Response } from "express";
import { retrieveUsersService } from "../services/user/retrieveUsers.service";
import { updateUserService } from "../services/user/updateUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const createdUser = await createUserService(userData);
  return res.status(201).json(createdUser);
};

export const retrieveUsersController = async (req: Request, res: Response) => {
  const users = await retrieveUsersService();
  return res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId: string = req.params.id;
  const updatedUser = await updateUserService(userData, userId);
  return res.status(200).json(updatedUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  await deleteUserService(userId);
  return res.status(204).json();
};
