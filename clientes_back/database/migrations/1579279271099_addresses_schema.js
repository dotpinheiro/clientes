"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddressesSchema extends Schema {
  async up() {
    this.create("addresses", table => {
      table.increments();

      table
        .integer("user_id_fk")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table
        .integer("customer_id_fk")
        .unsigned()
        .references("id")
        .inTable("customers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

      table.string("logradouro", 500),
        table.string("bairro", 254),
        table.string("uf", 2),
        table.string("cep", 10),
        table.string("municipio", 254),
        table.integer("numero"),
        table.timestamps();
    });
  }

  down() {
    this.dropIfExists("addresses");
  }
}

module.exports = AddressesSchema;
