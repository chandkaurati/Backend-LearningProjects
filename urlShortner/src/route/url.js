const express = require('express')
const {handleGenrateNewShortUrl} = require("../controller/url_controller")
const router = express.Router()

router.post('/', handleGenrateNewShortUrl)