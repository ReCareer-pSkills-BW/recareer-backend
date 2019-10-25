exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('candidates')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('candidates').insert([
        {
          id: 1,
          provider_id: 74,
          first_name: 'Card',
          last_initial: 'O',
          primary_skill: 12,
          bio:
            "Brain is the seed of intelligence a billion trillion stirred by starlight realm of the galaxies rich in heavy atoms descended from astronomers. Laws of physics two ghostly white figures in coveralls and helmets are soflty dancing a mote of dust suspended in a sunbeam the only home we've ever known a mote of dust suspended in a sunbeam emerged into consciousness. Rich in mystery citizens of distant epochs citizens of distant epochs a still more glorious dawn awaits another world not a sunrise but a galaxyrise.",
          profile_img: ''
        },
        {
          id: 2,
          provider_id: 28,
          first_name: 'Bottle',
          last_initial: 'G',
          primary_skill: 5,
          bio:
            "Descended from astronomers Jean-François Champollion tingling of the spine extraordinary claims require extraordinary evidence colonies ship of the imagination. Of brilliant syntheses encyclopaedia galactica of brilliant syntheses laws of physics a very small stage in a vast cosmic arena Tunguska event? Concept of the number one paroxysm of global death courage of our questions citizens of distant epochs another world cosmic fugue? Dream of the mind's eye a mote of dust suspended in a sunbeam courage of our questions not a sunrise but a galaxyrise dream of the mind's eye courage of our questions and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          profile_img: ''
        },
        {
          id: 3,
          provider_id: 9,
          first_name: 'Page',
          last_initial: 'D',
          primary_skill: 3,
          bio:
            "Hundreds of thousands dispassionate extraterrestrial observer extraplanetary rings of Uranus tendrils of gossamer clouds astonishment. Hearts of the stars citizens of distant epochs bits of moving fluff bits of moving fluff descended from astronomers something incredible is waiting to be known. Orion's sword bits of moving fluff with pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam Orion's sword dream of the mind's eye and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
          profile_img: ''
        }
      ]);
    });
};
