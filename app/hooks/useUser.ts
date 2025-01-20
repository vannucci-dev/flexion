import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { fetchUser } from "../lib/fetchUser";

export function useUserData() {
  return useQuery<User, Error>({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
}
