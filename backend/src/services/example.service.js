import { ExampleRepository } from "../repositories/example.repository.js";

export const ExampleService = {
  getServerTime: async () => {
    const result = await ExampleRepository.getCurrentTime();
    return result.time;
  },
   listUsers: async () => {
    return await ExampleRepository.getAllUsers();
  },
};