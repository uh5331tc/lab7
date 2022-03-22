let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#time')
let update = 10000
let maxFailedAttempts = 3
let issMarker 
let icon = L.icon({
    iconUrl: 'satilite.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})
let map = L.map('iss-map').setview(([0,0], 1))
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

iss(maxFailedAttempts)  // call funciton one time to start
//setInterval(iss, update)  //requests every 10 seconds

function iss(attempts) { 

    if (attempts <= 0 ) {
        alert(`Failed to contact Server`)
        return
    }

fetch(url).then( res => {
    return res.json()  //process the response to JSON
 }).then( (issData) => {
     console.log(issData)

    let lat = issData.latitude
    let long = issData.longitude
    
    issLat.innerHTML = lat
    issLong.innerHTML = long
    //create marker if it doesnt exist
    // move it if it does exsist
    if (!issMarker) {
        // create marker = L.maker
        issMarker = L.marker([lat, long], {icon: icon} ).addTo(map)
    } else {
        issMarker.setLatLong([lat, long])
    }

    let now = Date()
    timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`

}).catch( (err) => {
    attempts--// = same as attempts -1 
    console.log('ERROR!', err)
}).finally( ( ) => {
    setTimeout(iss, update, attempts)
})
}
