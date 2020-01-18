"use strict";

const User = use("App/Models/User");
const Address = use("App/Models/Address");

class UserController {
  async store({ request, auth }) {
    const { email, password, name, address, numero } = request.only(["email", "password", "name", "address", "numero"]);
    const { logradouro, bairro, uf, municipio } = address;
    const userData = {
      email,
      password,
      name
    };
    try {
      const user = await User.create(userData);
      const addressData = {
        logradouro,
        bairro,
        uf,
        municipio,
        user_id_fk: user.id,
        numero: numero
      };
      await Address.create(addressData);
      const token = await auth.attempt(email, password);
      return { user, ...token, success: true };
    } catch (err) {
      return { success: false };
    }
  }

  async getUsers({ request }) {
    const users = await User.all();
    return users;
  }
}

module.exports = UserController;
