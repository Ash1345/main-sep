const express = require('express');
const router = express.Router();

const {

    getUser,
    getSignupPage,
    createUser,
    getLoginPage,
    loginUser,
    updateBasicInfo,
    insertMatriculation,
    insertIntermediate,
    insertGraduation,
    insertSkills,
    insertAchievements,
    deleteUser,
    uploadProfilePhoto,
    logoutUser,
    editProfile,
    deleteSem,
    deleteSkill,
    deleteAchievement,
    deleteMatric,
    deleteInter
} = require('../controllers/user');

const { protect } = require('../middlewares/auth.js')


router.route('/signup').get(getSignupPage).post(createUser);
router.route('/login').get(getLoginPage).post(loginUser);

router.route('/profile').get(protect, getUser)

router.route('/profile/education/matric').post(protect, insertMatriculation)
router.route('/profile/education/inter').post(protect, insertIntermediate)
router.route('/profile/education/graduation').post(protect, insertGraduation)
router.route('/profile/education/skills').post(protect, insertSkills)
router.route('/profile/education/achievement').post(protect, insertAchievements)

router.route('/profile/:id/photo').put(uploadProfilePhoto)
router.route('/profile/:id/delete').delete(deleteUser)

router.route('/editprofile').get(protect, editProfile)
router.route('/editprofile/basicinfo').post(protect, updateBasicInfo)
router.route('/editprofile/matric').post(protect, deleteMatric)
router.route('/editprofile/inter').post(protect, deleteInter)
router.route('/editprofile/grad/:id').post(protect, deleteSem)
router.route('/editprofile/skills/:id').post(protect, deleteSkill)
router.route('/editprofile/achievements/:id').post(protect, deleteAchievement)

router.route('/logout').get(protect, logoutUser)

module.exports = router;