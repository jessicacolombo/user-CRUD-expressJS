import { listOfUsersWithoutPassword } from "./../../schemas/user.schema";
import { UserEntity } from "./../../entities/user.entity";
import AppDataSource from "../../data-source";

export const retrieveUsersService = async () => {
  const userRepository = AppDataSource.getRepository(UserEntity);

  const users = await userRepository.find();

  const usersToShow = await listOfUsersWithoutPassword.validate(users, {
    stripUnknown: true,
  });

  return usersToShow;
};
