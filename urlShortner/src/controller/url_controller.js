const {nanoid} = require("nanoid")
const URL = require("../model/url")
async function handleGenrateNewShortUrl(req,res){
       const body = req.body
       if(!body.url) return res.status(400).json({error: "url is required"})
       try {
       const shortID = nanoid(8) 
       await URL.create({
        shortId : shortID,
        redirectURL: body.url,
        visitHistory : [],
       })

       return res.json({id : shortID})
       } catch (error) {
        
       }
}

module.exports = handleGenrateNewShortUrl