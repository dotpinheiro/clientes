"use strict";

const Customer = use("App/Models/Customer");
const Address = use("App/Models/Address");

class CustomerController {
  async index({ auth }) {
    const customers = Customer.query()
      .where("customers.user_id_fk", "=", auth.user.id)
      .leftJoin("addresses", "customers.id", "addresses.customer_id_fk")
      .fetch();
    return customers;
  }

  async store({ request, auth }) {
    const data = request.only(["name", "email", "phone"]);
    const { address, numero, cep } = request.only(["address", "numero", "cep"]);
    data.user_id_fk = auth.user.id;
    const customer = await Customer.create(data);
    const addressData = {
      logradouro: address.logradouro,
      bairro: address.bairro,
      uf: address.uf,
      cep: cep,
      municipio: address.localidade,
      numero: numero,
      customer_id_fk: customer.id
    };
    await Address.create(addressData);
    return customer;
  }

  async update({ request, response, auth }) {
    const { id } = request.params;
    const { name, email, phone, address } = request.only(["name", "email", "phone", "address"]);
    const customer = await Customer.query()
      .where("id", id)
      .where("user_id_fk", auth.user.id)
      .update({ name, email, phone })
      .returning("*");
    const addressData = {
      logradouro: address.logradouro,
      bairro: address.bairro,
      uf: address.uf,
      cep: address.cep,
      municipio: address.localidade,
      numero: address.numero
    };
    await Address.query()
      .where("customer_id_fk", id)
      .update(addressData);
    return customer;
  }

  async destroy({ request, response, auth }) {
    const { id } = request.params;
    const customer = await Customer.find(id);
    if (customer.user_id_fk !== auth.user.id) return { success: false, msg: "Missing permissions" };
    await customer.delete();
    return { success: true };
  }
}

module.exports = CustomerController;
