"use strict";

const User = use("App/Models/User");

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.only(["email", "password"]);
    const token = await auth.attempt(email, password);
    const user = await User.findBy("email", email);
    return { user, ...token, success: true };
  }

  async logout({ request, response, auth }) {
    try {
      auth.logout();
      return { success: true };
    } catch (err) {}
  }
}

module.exports = SessionController;
