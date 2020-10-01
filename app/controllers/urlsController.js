const Url = require('../models/url')
const { request } = require('express')

const urlsController = {}

urlsController.list = (request, response) => {
    Url.find()
    .then((urls) => {
        response.json(urls)
    })
    .catch((error) => {
        response.json(error)
    })
}

urlsController.create = (request, response) => {
    const url = new Url(request.body)
    url.save()
    .then((url) => {
        response.json(url)
    })
    .catch((error) => {
        response.json(error)
    })
}

urlsController.show = (request, response) => {
    Url.findById(request.params.id)
    .then((url) => {
        response.json(url)
    })
    .catch((error) => {
        response.json(error)
    })
}

urlsController.update = (request, response) => {
    Url.findByIdAndUpdate(request.params.id, request.body, {new: true})
    .then((url) => {
        response.json(url)
    })
    .catch((error) => {
        response.json(error)
    })
}

urlsController.destroy = (request, response) => {
    Url.findByIdAndDelete(request.params.id)
    .then((url) => {
        response.json(url)
    })
    .catch((error) => {
        response.json(error)
    })
}

//redirect to original url
urlsController.getOriginalUrl = (request, response) => {
    Url.findOne({hashedUrl : request.params.hash}, 'originalUrl')
    .then((url) => {
       // response.json(url.originalUrl)
        response.redirect(url.originalUrl);
    })
    .catch((error) => {
        response.json(error)
    })
}
module.exports = urlsController