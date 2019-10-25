exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('skills')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('skills').insert([
        {
          id: 1,
          category_name: 'administrative'
        },
        {
          id: 2,
          category_name: 'construction'
        },
        {
          id: 3,
          category_name: 'culinary'
        },
        {
          id: 4,
          category_name: 'custodial'
        },
        {
          id: 5,
          category_name: 'electrical'
        },
        {
          id: 6,
          category_name: 'fabrication'
        },
        {
          id: 7,
          category_name: 'firefighting'
        },
        {
          id: 8,
          category_name: 'HVAC'
        },
        {
          id: 9,
          category_name: 'leadership'
        },
        {
          id: 10,
          category_name: 'library services'
        },
        {
          id: 11,
          category_name: 'licensed specialty driver'
        },
        {
          id: 12,
          category_name: 'machining'
        },
        {
          id: 13,
          category_name: 'mechanic'
        },
        {
          id: 14,
          category_name: 'plumbing'
        },
        {
          id: 15,
          category_name: 'technology'
        },
        {
          id: 16,
          category_name: 'warehousing'
        }
      ]);
    });
};
