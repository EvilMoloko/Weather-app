export function correctedTime(time) {
    const date = new Date(time*1000)
    let hour = date.getHours();
    let minute = date.getMinutes()

    return (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute
}

export function interpretWindDirection(deg) {
        if ((deg >= 0 && deg <= 22.5) || (deg <= 360 && deg >= 337.6)) {
            return 'север'
        }
        if ((deg >= 22.6 && deg <= 67.5)) {
            return 'северо-восток'
        }
        if ((deg >= 67.6 && deg <= 112.5)) {
            return 'восток'
        }
        if ((deg >= 112.6 && deg <= 157.5)) {
            return 'юго-восток'
        }
        if ((deg >= 157.6 && deg <= 202.5)) {
            return 'юг'
        }
        if ((deg >= 202.6 && deg <= 247.5)) {
            return 'юго-запад'
        }
        if ((deg >= 247.6 && deg <= 292.5)) {
            return 'запад'
        }
        if ((deg >= 292.6 && deg <= 337.5)) {
            return 'северо-запад'
        }
}

export function interpretWindSpeed(speed) { 
    if (speed < 0.3) {
        return 'штиль'
    }
    if ((speed >= 0.3 && speed <= 1.5)) {
        return 'тихий ветер'
    }
    if ((speed >= 1.6 && speed <= 3.3)) {
        return 'легкий ветер'
    }
    if ((speed >= 3.4 && speed <= 5.4)) {
        return 'слабый ветер'
    }
    if ((speed >= 5.5 && speed <= 7.9)) {
        return 'умеренный ветер'
    }
    if ((speed >= 8 && speed <= 10.7)) {
        return 'свежий ветер'
    }
    if ((speed >= 10.8 && speed <= 13.8)) {
        return 'сильный ветер'
    }
    if ((speed >= 13.9 && speed <= 17.1)) {
        return 'крепкий ветер'
    }
    if ((speed >= 17.2 && speed <= 20.7)) {
        return 'очень крепкий ветер'
    }
    if ((speed >= 20.8 && speed <= 24.4)) {
        return 'шторм'
    }
    if ((speed >= 24.5 && speed <= 28.4)) {
        return 'сильный шторм'
    }
    if ((speed >= 28.5 && speed <= 32.6)) {
        return 'жестокий шторм'
    }
    if (speed > 32.7 ) {
        return 'ураган'
    }
}

export function convertGPaToMmHg(gpa) {
    // 1 ГПа = 0,750062 мм рт. ст.
    return Math.round(gpa * 0.750062);
}

// ПЕРЕДЕЛАТЬ ИСПОЛЬЗУЯ weather_code
export function convertPrecipitationToIcon(weather) {
    const {precipitation, rain, showers, snowfall, cloud_cover} = weather
    
    if (!precipitation) {
        if (cloud_cover <= 30) {
            return 'sun'
        } else {
            return 'mainly-cloudy'
        }
    } else {
        if (cloud_cover <= 30 && rain) {
            return 'small-rain-sun'
        }
        if ( rain > showers && rain > snowfall) {
            return 'small-rain'
        }
        if ( showers > rain && showers > snowfall) {
            return 'rain'
        }
        if ( snowfall > rain && snowfall > showers) {
            if (snowfall >= 0.1) {
                return 'snow'
            } else {
                return 'small-snow'
            }
        }
    }
}
