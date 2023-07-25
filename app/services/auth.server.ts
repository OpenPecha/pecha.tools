import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { sessionStorage } from "~/services/session.server";
import { db as prisma } from "./db.server";

// Create an instance of the authenticator, pass a generic (optional) with what your
// strategies will return and will be stored in the session

export const authenticator = new Authenticator(sessionStorage);

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: process.env.AUTH0_CALLBACK_URL!,
    clientID: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
    domain: process.env.AUTH0_DOMAIN!,
  },
  async (data) => {
    let { picture, name, email } = data?.profile?._json;

    const userdata = await prisma.user.upsert({
      where: {
        email: email,
      },
      create: {
        picture: picture,
        username: name,
        email: email,
      },
      update: {
        picture: picture,
        username: name,
        email: email,
      },
    });
    return userdata;
  }
);

authenticator.use(auth0Strategy);
