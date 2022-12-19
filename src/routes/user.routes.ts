import { userSchema, userUpdateSchema } from "./../schemas/user.schema";
import { ensureDataIsValid } from "./../middlewares/ensureDataIsValid.middleware";
import { ensureIsAdmMiddleware } from "./../middlewares/ensureIsAdm.middleware";
import { ensureAuthMiddleware } from "./../middlewares/ensureAuth.middleware";
import {
  createUserController,
  deleteUserController,
  retrieveUsersController,
  updateUserController,
} from "./../controllers/user.controllers";
import { Router } from "express";
import { ensureItsOwnerOfResourceMiddleware } from "../middlewares/ensureItsOwnerOfResource.middleware";

export const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userSchema), createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  retrieveUsersController
);
userRoutes.patch(
  "/:id",
  ensureDataIsValid(userUpdateSchema),
  ensureAuthMiddleware,
  ensureItsOwnerOfResourceMiddleware,
  updateUserController
);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteUserController
);
