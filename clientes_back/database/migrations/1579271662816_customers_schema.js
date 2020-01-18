"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CustomersSchema extends Schema {
  async up() {
    this.create("customers", table => {
      table.increments();
      table.string("name", 254);
      table.string("email", 254);
      table.string("phone", 20);
      table.integer("user_id_fk").references("users.id");
      table.timestamps();
    });
  }

  down() {
    this.dropIfExists("customers");
  }
}

module.exports = CustomersSchema;
