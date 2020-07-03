import express from 'express';
import axios from 'axios';
import Users from '../schemas/Users';

const router = express.Router();

router.get("/", async (req, res) => {
    try{
        // Kakao Token req
        console.log("/auth");
        const tokenResult = await axios.post("https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id="
            + process.env.KAKAO_REST_API_KEY
            + "&redirect_uri="
            + process.env.KAKAO_LOGIN_REDIRECT_URL
            + "&code="
            + req.query.code,
            {
            headers: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
        })
        
        if(tokenResult.status === 200) {
            req.session!.token = tokenResult.data
            console.log(req.session!.token);
            res.setHeader("token", tokenResult.data.access_token);
            res.redirect("http://172.20.10.3:8080/auth?token=" + tokenResult.data.access_token);
        }
        
        /*if(tokenResult.data.access_token){
            // Find User from token
            const infoResult = await axios.post("https://kapi.kakao.com//v2/user/me",
                {
                headers: {
                    "Authorization": "Bearer" + tokenResult.data.access_token,
                    "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                },
            })

            // Search to exist User from Database
            const isUser = await Users.findOne({ u_id: infoResult.data.email });
            if(!isUser){
                await Users.create({
                    u_id: infoResult.data.email,
                    u_token: tokenResult.data,
                    u_nickname: infoResult.data.kakao_account.profile.nickname,
                    u_phone: infoResult.data.kakao_account.phone_number,
                })
            } 
            console.log(isUser)
        }*/
    } catch(err) {
        console.log(err)
    }
});

/*
 * Kakao logout with account
 */
router.get("/logout", async (req, res) => {
    try{
        /*const result = await axios.post("https://kauth.kakao.com/oauth/logout?client_id="
            + process.env.KAKAO_REST_API_KEY
            + "&logout_redirect_uri="
            + process.env.KAKAO_LOGIN_REDIRECT_URL,
            {
                headers: {
                    "content-type": "application/x-www-form-urlencoded;charset=utf-8"
                },
        })
        
        if(result.status === 200) {
            
        }*/
        res.redirect("http://172.20.10.3:8080/auth");
    } catch(err) {
        console.log(err)
    }
})


router.post("/token", async (req, res) => {
    console.log(req.session!.token)
    res.json({ token: req.session!.token });
});

export default router;