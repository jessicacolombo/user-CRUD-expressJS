import { userWithoutPassword } from "./../../schemas/user.schema";
import { AppError } from "./../../errors/AppError";
import { UserEntity } from "./../../entities/user.entity";
import { IUserRequest, IUser } from "./../../interfaces/users/index";
import AppDataSource from "../../data-source";

export const createUserService = async (
  userData: IUserRequest
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(UserEntity);

  if (!userData.email) {
    throw new AppError("Email is a required field.", 400);
  }

  const user = await userRepository.findOneBy({
    email: userData.email,
  });

  if (user) {
    throw new AppError("Email already registered.", 400);
  }

  const createdUser = userRepository.create(userData);
  await userRepository.save(createdUser);

  const userToShow = await userWithoutPassword.validate(createdUser, {
    stripUnknown: true,
  });

  return userToShow;
};
