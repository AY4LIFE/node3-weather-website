const request = require('request')
const forecast = (longitude, latitude, callback) => {
const url = 'https://api.weatherstack.com/current?access_key=57ed2f4957c6ba32fbe091b601939758&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + ''

    request({url, json:true}, (error, {body}) => {
        if (error){
            callback("Unable to connect to location services", undefined)
        }else if (body.error){
            callback("Unable to find location. Try another search", undefined)
        }else{
            callback(undefined,
                body.current.weather_descriptions[0] + ". It is " + body.current.temperature + " degrees right now. it feels like " + body.current.feelslike + " degrees. The Humidity is " + body.current.humidity + "%."
            
            )
        }
    })
}

module.exports = forecast