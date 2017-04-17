exports.seed = function (knex, Promise) {
  return knex.raw('SET foreign_key_checks = 0;')
  .then(() => {
    return knex('jobpost').del()
      .then(function () {
        return knex('jobpost').insert([
          { id: 1, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 2, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 3, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 4, company_id: 1, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 5, company_id: 1, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 6, company_id: 1, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 7, company_id: 1, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 8, company_id: 1, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 9, company_id: 1, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 10, company_id: 1, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          { id: 11, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 12, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 13, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 14, company_id: 2, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 15, company_id: 2, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 16, company_id: 2, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 17, company_id: 2, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 18, company_id: 2, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 19, company_id: 2, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 20, company_id: 2, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },

          { id: 21, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 22, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 23, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 24, company_id: 3, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 25, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 26, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 27, company_id: 3, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 28, company_id: 3, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 29, company_id: 3, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 30, company_id: 3, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          { id: 31, company_id: 4, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 32, company_id: 4, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 33, company_id: 4, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 34, company_id: 4, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 35, company_id: 4, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 36, company_id: 4, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 37, company_id: 4, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 38, company_id: 4, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 39, company_id: 4, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 40, company_id: 4, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          { id: 41, company_id: 5, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 42, company_id: 5, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 43, company_id: 5, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 44, company_id: 5, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 45, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 46, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 47, company_id: 5, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 48, company_id: 5, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 49, company_id: 5, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 50, company_id: 5, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          { id: 51, company_id: 6, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 52, company_id: 6, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 53, company_id: 6, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 54, company_id: 6, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 55, company_id: 6, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 56, company_id: 6, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 57, company_id: 6, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 58, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 59, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 60, company_id: 6, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          { id: 61, company_id: 7, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 62, company_id: 7, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 63, company_id: 7, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 64, company_id: 7, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 65, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 66, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 67, company_id: 7, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 68, company_id: 7, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 69, company_id: 7, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 70, company_id: 7, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          { id: 71, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 72, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 73, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 74, company_id: 8, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 75, company_id: 8, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 76, company_id: 8, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 77, company_id: 8, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 78, company_id: 8, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 79, company_id: 8, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 80, company_id: 8, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
          
          /*{ id: 91, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 92, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 93, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 94, company_id: 9, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 95, company_id: 9, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 96, company_id: 9, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 97, company_id: 9, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 98, company_id: 9, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 99, company_id: 9, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 100, company_id: 9, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },*/

          { id: 91, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 1, location_id: 1 },
          { id: 92, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 2, location_id: 2 },
          { id: 93, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 3, location_id: 3 },
          { id: 94, company_id: 10, title: 'Jr Dev', level: 0, description: 'Looking for Jr Dev.', industry_id: 4, location_id: 4 },
          { id: 95, company_id: 10, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 5, location_id: 5 },
          { id: 96, company_id: 10, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 6, location_id: 6 },
          { id: 97, company_id: 10, title: 'Mid Dev', level: 1, description: 'Looking for Mid Dev.', industry_id: 7, location_id: 7 },
          { id: 98, company_id: 10, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 8, location_id: 8 },
          { id: 99, company_id: 10, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 9, location_id: 9 },
          { id: 100, company_id: 10, title: 'Sr Dev', level: 2, description: 'Looking for Sr Dev.', industry_id: 10, location_id: 10 },
        ]);
      });
  });
};
