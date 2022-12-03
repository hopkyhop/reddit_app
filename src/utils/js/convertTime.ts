export function convertTime(ms: number) {
    const diff = Date.now() - ms * 1000
    const hours = Math.round(diff / (1000 * 60 * 60));
    const minutes = Math.round(diff / (1000 * 60));

    if (hours > 24) {
        return `${Math.round(hours/24)} дней назад`
    }
    if (hours < 24 && hours > 1) {
        return `${hours} часов назад`
    } else {
        if (minutes) {
            return `${minutes} минут назад`
        } else {
            return `Только что`
        }
    }
}