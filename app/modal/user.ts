import { db } from "~/services/db.server";

export async function getOrCreateUser(session) {
  try {
    let user = await db.user.findFirst({
      where: { username: session?.username },
    });
    if (!user) {
      user = await db.user.create({
        data: {
          username: session?.username,
          email: session?.email,
          picture: session?.picture,
        },
      });
    }
    return user;
  } catch (e) {
    throw new Error(e + "user not found");
  }
}

export async function getUser(email: string) {
  return await db.user.findFirst({
    where: { email },
  });
}
