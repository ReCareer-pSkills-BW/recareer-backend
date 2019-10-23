exports.up = function(knex) {
  return (
    knex.schema
      //   Admin
      .table('admin', col => {
        col.string('password', 255);
      })
  );
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('admin');
};
