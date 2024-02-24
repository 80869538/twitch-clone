import {db} from "@/lib/db";
import {getSelf} from "@/lib/auth-service";

export const getRecomended = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const users = await db.user.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  return users;
};
