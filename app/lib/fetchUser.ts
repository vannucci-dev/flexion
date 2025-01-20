import { User } from "@/app/types/user";

export const fetchUser = async (): Promise<User> => {
  const response = await fetch("/api/user");
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }
  return response.json();
};
