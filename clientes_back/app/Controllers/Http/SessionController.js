"use strict";

const User = use("App/Models/User");

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only(["email", "password"]);
    const token = await auth.attempt(email, password);
    const user = await User.findBy("email", email);
    console.log(user);
    user.token = token;
    return { user, success: true };
  }
}

module.exports = SessionController;
