exports.up = function(knex) {
  return (
    knex.schema
      //   Providers
      .createTable('providers', col => {
        col.increments();
        col
          .string('name', 150)
          .unique()
          .notNullable();
      })
      // Provider Admin
      .createTable('admin', col => {
        col.increments();
        col
          .string('username', 50)
          .unique()
          .notNullable();
        col
          .string('email', 100)
          .unique()
          .notNullable();
        col
          .integer('provider_id')
          .unsigned()
          .references('id')
          .inTable('admin')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        col.string('first_name', 50);
        col.string('last_name', 50);
        col.string('mailing_address', 255);
        col.string('mailing_state', 2);
        col.integer('mailing_zip', 10);
        col.string('primary_phone', 25);
      })
      // Skills
      .createTable('skills', col => {
        col.increments();
        col
          .string('category_name', 150)
          .unique()
          .notNullable();
      })
      // Candidates
      .createTable('candidates', col => {
        col.increments();
        col
          .integer('provider_id')
          .unsigned()
          .references('id')
          .inTable('providers')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        col.string('first_name');
        col.string('last_initial');
        col
          .integer('primary_skill')
          .unsigned()
          .references('id')
          .inTable('skills')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        col.string('bio', 2000);
        col.string('profile_img');
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('candidates')
    .dropTableIfExists('skills')
    .dropTableIfExists('admin')
    .dropTableIfExists('providers');
};
