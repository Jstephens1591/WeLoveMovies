exports.up = function (knex) {
    return knex.schema.createTable("critics", (table) => {
      table.increments("critic_id").primary(); // A unique ID for the critic.
      table.string("preferred_name");  // The critic's preferred first name.
      table.string("surname");  // The critic's last name.
      table.string("organization_name");  //  The name of the organization the critic works for.
      table.timestamps(true, true); // adds created_at and updated_at columns; passing true as the first argument sets the columns to be a timestamp type while passing true as the second argument sets those columns to be non-nullable and to use the current timestamp by default
    });
  };

  exports.down = function (knex) {
    return knex.schema.dropTable("critics");
  };