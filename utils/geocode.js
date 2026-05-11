const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.opencagedata.com/geocode/v1/json?q=' + 
        encodeURIComponent(address) + 
        '&key=f296071334f94759a66b9a75e53ddd44&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.results.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng,
                location: body.results[0].formatted
            })
        }
    })
}

module.exports = geocode