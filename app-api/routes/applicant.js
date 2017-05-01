var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var ctrlapplicants = require('../controllers/applicants');
var ctrlposters = require('../controllers/posters');
var ctrlquestions = require('../controllers/questions');
var ctrlAuth = require('../controllers/authentication');
var ctrlhr = require('../controllers/hrquestions');
require('../models/applicantsdb');
require('../models/posterdb');
require('../models/questiondb');
require('../models/hrquestionsdb');


//applicants

router.get('/applicants',ctrlapplicants.applicantdata);
router.post('/applicants',ctrlapplicants.applicantsCreate);
router.get('/applicants/:applicantid/:posterid',ctrlapplicants.applicationsRead);
//router.put('/applicants/:FirstName',ctrlapplicants.applicationsUpdate);
//router.delete('/applicants/a:FirstName',ctrlapplicants.applicationsDelete);

//poster
router.get('/posters',ctrlposters.postersdata);
router.post('/posters',ctrlposters.postersCreate);
router.get('/posters/:bytitle',ctrlposters.postersRead);
router.get('/posters/:bytitle/:byid',ctrlposters.postersDetails);
//router.put('/posters/:posterid',ctrlposters.postersUpdate);
//router.delete('/posters/:posterid',ctrlposters.postersDelete);

router.get('/questions/:ques',ctrlquestions.questionsRead);
router.post('/questions/:ques', ctrlquestions.questionsCreate);

router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);

router.get('/hrquestions',ctrlhr.hrread);
router.post('/hrquestions',ctrlhr.hrcreate);


module.exports = router;
