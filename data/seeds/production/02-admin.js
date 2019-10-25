exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('admin')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('admin').insert([
        {
          id: 1,
          username: 'admin',
          password: 'admin',
          email: 'admin@admin.com',
          provider_id: 28,
          first_name: 'Pink',
          last_name: 'Candidate',
          mailing_address: '123 Main',
          mailing_state: 'NY',
          mailing_zip: 11354,
          primary_phone: '555-555-1212'
        },
        {
          id: 2,
          username: 'admin2',
          password: 'admin',
          email: 'admin2@admin.com',
          provider_id: 74,
          first_name: 'Friday',
          last_name: 'Lamp',
          mailing_address: '124 Main',
          mailing_state: 'WI',
          mailing_zip: 53515,
          primary_phone: '555-555-1212'
        },
        {
          id: 3,
          username: 'admin3',
          password: 'admin',
          email: 'admin3@admin.com',
          provider_id: 9,
          first_name: 'Roman',
          last_name: 'Cup',
          mailing_address: '125 Main',
          mailing_state: 'AZ',
          mailing_zip: 85201,
          primary_phone: '555-555-1212'
        }
      ]);
    });
};
