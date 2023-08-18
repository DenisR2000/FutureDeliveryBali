export default function getFetch(url, params) {
    // params => { userId: 1 }
    // Object.entries(params) => [[ userId, 1 ]]
    const qeryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&') // userId=1
    return fetch(`${url}/${qeryString}`, {
        method: "GET",
        
    })
}