export function correctedTime(time) {
    const date = new Date(time * 1000)
    let hour = date.getHours()
    let minute = date.getMinutes()

    return (
        (hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute
    )
}

export function correctedWeekDay(time) {
    const currentDate = new Date()
    const date = new Date(time * 1000)
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ]

    if (currentDate.getDate() === date.getDate()) {
        return "Сегодня"
    } else if (
        currentDate.getDate() + 1 === date.getDate() ||
        (currentDate.getDate() === 31 && date.getDate() === 1)
    ) {
        return "Завтра"
    } else {
        return days[date.getDay()]
    }
}

export function correctedMonthDay(time) {
    const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "нояб",
        "дек",
    ]
    const date = new Date(time * 1000)
    const day = date.getDate()
    const monthIndex = date.getMonth()
    const monthName = months[monthIndex]

    return `${day} ${monthName}`
}

export function interpretWindDirection(deg) {
    if ((deg >= 0 && deg <= 22.5) || (deg <= 360 && deg >= 337.6)) {
        return "север"
    }
    if (deg >= 22.6 && deg <= 67.5) {
        return "северо-восток"
    }
    if (deg >= 67.6 && deg <= 112.5) {
        return "восток"
    }
    if (deg >= 112.6 && deg <= 157.5) {
        return "юго-восток"
    }
    if (deg >= 157.6 && deg <= 202.5) {
        return "юг"
    }
    if (deg >= 202.6 && deg <= 247.5) {
        return "юго-запад"
    }
    if (deg >= 247.6 && deg <= 292.5) {
        return "запад"
    }
    if (deg >= 292.6 && deg <= 337.5) {
        return "северо-запад"
    }
}

export function interpretWindSpeed(speed) {
    if (speed < 0.3) {
        return "штиль"
    }
    if (speed >= 0.3 && speed <= 1.5) {
        return "тихий ветер"
    }
    if (speed >= 1.6 && speed <= 3.3) {
        return "легкий ветер"
    }
    if (speed >= 3.4 && speed <= 5.4) {
        return "слабый ветер"
    }
    if (speed >= 5.5 && speed <= 7.9) {
        return "умеренный ветер"
    }
    if (speed >= 8 && speed <= 10.7) {
        return "свежий ветер"
    }
    if (speed >= 10.8 && speed <= 13.8) {
        return "сильный ветер"
    }
    if (speed >= 13.9 && speed <= 17.1) {
        return "крепкий ветер"
    }
    if (speed >= 17.2 && speed <= 20.7) {
        return "очень крепкий ветер"
    }
    if (speed >= 20.8 && speed <= 24.4) {
        return "шторм"
    }
    if (speed >= 24.5 && speed <= 28.4) {
        return "сильный шторм"
    }
    if (speed >= 28.5 && speed <= 32.6) {
        return "жестокий шторм"
    }
    if (speed > 32.7) {
        return "ураган"
    }
}

export function convertGPaToMmHg(gpa) {
    // 1 ГПа = 0,750062 мм рт. ст.
    return Math.round(gpa * 0.750062)
}

export function interpretToIconWeatherCode(weatherCode) {
    if (weatherCode === 0 || weatherCode === 1) {
        return "sun"
    } else if (weatherCode === 2) {
        return "partly-cloudy"
    } else if (weatherCode === 3) {
        return "mainly-cloudy"
    } else if (weatherCode === 45 || weatherCode === 48) {
        return "mist"
    } else if (
        weatherCode === 51 ||
        weatherCode === 53 ||
        weatherCode === 61 ||
        weatherCode === 63
    ) {
        return "small-rain"
    } else if (
        weatherCode === 55 ||
        weatherCode === 65 ||
        weatherCode === 80 ||
        weatherCode === 81 ||
        weatherCode === 82 ||
        weatherCode === 95
    ) {
        return "rain"
    } else if (
        weatherCode === 56 ||
        weatherCode === 57 ||
        weatherCode === 66 ||
        weatherCode === 67 ||
        weatherCode === 96 ||
        weatherCode === 99
    ) {
        return "rain-snow"
    } else if (weatherCode === 71 || weatherCode === 77) {
        return "small-snow"
    } else if (
        weatherCode === 73 ||
        weatherCode === 75 ||
        weatherCode === 85 ||
        weatherCode === 86
    ) {
        return "snow"
    }
}

export function interpretWeatherCodeToDescr(weatherCode) {
    switch (weatherCode) {
        case 0:
            return "Ясно"
        case 1:
            return "Преимущ. ясно"
        case 2:
            return "Перем. облачн."
        case 3:
            return "Пасмурно"
        case 45:
            return "Туман"
        case 48:
            return "Ледяной туман"
        case 51:
            return "Морось"
        case 53:
            return "Морось"
        case 55:
            return "Плотная морось"
        case 56:
            return "Ледяная морось"
        case 57:
            return "Ледяная морось"
        case 61:
            return "Слабый дождь"
        case 63:
            return "Дождь"
        case 65:
            return "Сильный дождь"
        case 66:
            return "Ледяной дождь"
        case 67:
            return "Ледяной дождь"
        case 71:
            return "Cнег"
        case 73:
            return "Снег"
        case 75:
            return "Cнегопад"
        case 77:
            return "Снежные зерна"
        case 80:
            return "Ливень"
        case 81:
            return "Ливень"
        case 82:
            return "Ливень"
        case 85:
            return "Снег"
        case 86:
            return "Снегопад"
        case 95:
            return "Гроза"
        case 96:
            return "Гроза с градом"
        case 99:
            return "Гроза с градом"
        default:
            return "Нет данных"
    }
}
