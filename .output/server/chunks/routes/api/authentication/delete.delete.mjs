import { d as defineEventHandler, r as requireUserSession, c as createError } from '../../../nitro/nitro.mjs';
import { c as connectDB, U as User$2 } from '../../../_/User.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'jose';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'mongoose';
import 'zod';

const User$1 = User$2;
const loggedInUser = defineEventHandler(async (event) => {
  try {
    await connectDB();
    const { user } = await requireUserSession(event);
    const userEmail = user.email;
    const findUser = await User$1.find({ email: userEmail });
    if (findUser[0]) {
      return findUser[0];
    }
    ;
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

const User = User$2;
const delete_delete = defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    await User.deleteOne({ email: user == null ? void 0 : user.email });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      statusMessage: "Please try again."
    });
  }
});

export { delete_delete as default };
//# sourceMappingURL=delete.delete.mjs.map
