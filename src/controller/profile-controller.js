import profileService from "../service/profile-service.js";
let responseSent = false;
 
const profile = async (req, res, next) => {
    try {
        
        await profileService.profile(req.file, res);
    } catch (e) {
        next(e);
    }
}; 
export default { 
    profile, 
}
