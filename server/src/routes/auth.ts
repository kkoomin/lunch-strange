import express from 'express';
import axios from 'axios';
import Users from '../schemas/Users';

const router = express.Router();

/*
 * Kakao login auth
 */
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
        
        if(tokenResult.data.access_token && tokenResult.status === 200){
            res.setHeader("token", tokenResult.data.access_token);
            res.redirect(process.env.REDIRECT_URL_LOGIN_SUCCESS + "#token=" + tokenResult.data.access_token);
        }
    } catch(err) {
        console.log(err)
    }
});

/*
 * Kakao login getUserInfo
 */
router.post("/getUserInfo", async (req, res) => {
    console.log("/auth/getUserInfo")
    console.log(req.body.token)
    try{
        // Find User from token
        const infoResult = await axios.get("https://kapi.kakao.com/v2/user/me",
            {
            headers: {
                "Authorization": "Bearer " + req.body.token,
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
        })

        // Search to exist User from Database
        const isUser = await Users.findOne({ u_id: infoResult.data.kakao_account.email });
        if(!isUser){
            await Users.create({
                u_id: infoResult.data.kakao_account.email,
                u_token: req.body.token,
                u_nickname: infoResult.data.properties.nickname,
            })
        } else if(isUser.get("u_token") === undefined){
            await Users.findOneAndUpdate({ u_id: isUser.get("u_id") }, { u_token: req.body.token });
        }

        console.log(isUser);
        res.json({  
            u_id: infoResult.data.kakao_account.email,
            u_nickname: infoResult.data.properties.nickname,
        });
    } catch (err) {
        console.log(err)
    }
});

/*
 * Kakao logout with account
 */
router.get("/logout", async (req, res) => {
    try{
        console.log(req)
        const isUser = await Users.findOne({ u_token: req.query.toekn });
        console.log(req.query.token);
        console.log(isUser);
        res.redirect(process.env.REDIRECT_URL_LOGIN_SUCCESS + "#state=logout");
    } catch(err) {
        console.log(err)
    }
})


router.post("/token", async (req, res) => {
    console.log(req.session!.token)
    res.json({ token: req.session!.token });
});

export default router;