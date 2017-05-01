var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/home');
var ctrlapplicant = require('../controllers/applicant');
var ctrlapplicantsignup = require('../controllers/applicant');
var ctrlposter = require('../controllers/poster');
var ctrlcommon = require('../controllers/common');


/*main pages */
router.get('/', ctrlMain.index);
router.get('/applicant',ctrlapplicant.applicantinfo);
router.get('/applicantsignup',ctrlapplicantsignup.applicationsignup);
router.get('/questionsview', ctrlcommon.commentsdata);
router.get('/poster',ctrlposter.posterinfo);
router.get('/job',ctrlposter.jobdata);
router.get('/register',ctrlcommon.signin);
router.get('/login',ctrlMain.loginn);

/*other pages*/


module.exports = router;
