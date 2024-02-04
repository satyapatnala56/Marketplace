import moment from "moment"

export const getRecentString = (date) => {
    const lastMoment = new moment(date)
    const current = new moment()
    const duration = moment.duration(current.diff(lastMoment));
    return `Last Updated ${Math.floor(duration.asYears())} years ${Math.floor(duration.asMonths())} months ago`
}