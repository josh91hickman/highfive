const controller = require('./controllers');
const cors = require('cors');
const router = require('express').Router();
const path = require('path');

router.options('*', cors());
// users
router.get('/api/users', controller.users.get);
router.get('/api/users/:id', controller.users.getById);
router.put('/api/users/:id', controller.users.updateById);
router.post('/api/users', controller.users.post);

//companies
router.get('/api/companies', controller.companies.getAll);
router.get('/api/companies/:id', controller.companies.getById);
router.post('/api/companies', controller.companies.createOne);
router.put('/api/companies/:id', controller.companies.updateCompany);
router.delete('/api/companies/:id', controller.companies.deleteCompany);

//jobposts
// router.post('/api/jobposts/:company_id', controller.jobposts.createOne)
// router.get('/api/jobposts', controller.jobposts.getAll);
// router.get('/api/jobposts/:id', controller.jobposts.getById);
// router.get('/api/jobposts/:company_id', controller.jobposts.getAllCompanyJobs)
// router.get('/api/jobposts/:post_id/:company_id', controller.jobposts.getCompanyJobById)

//questions
// router.get('/api/questions')
// router.get('/api/questions', controller.questions.get);
// router.post('/api/questions')

//videos
// router.get('/api/videos')
// router.post('/api/videos')

//locations
// router.get('/api/locations')
// router.post('/api/locations')

//industries
// router.get('/api/industries')
// router.post('/api/industries')

module.exports = router;

