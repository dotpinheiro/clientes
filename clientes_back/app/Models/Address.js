"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Address extends Model {
  users() {
    return this.hasMany("App/Models/User");
  }

  customers() {
    return this.hasMany("App/Models/Customer");
  }
}

module.exports = Address;
