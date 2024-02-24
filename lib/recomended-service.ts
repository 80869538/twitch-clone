import {db} from "@/lib/db";
import {getSelf} from "@/lib/auth-service";

export const getRecomended = async () => {
  let userId;
  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }
  let users = [];
  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createAt: "desc",
      },
    });
  }

  return users;
};
