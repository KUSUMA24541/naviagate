async function report(x,y){
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=dbf86ecea3494b6481993833240507&q=${x},${y}&aqi=yes`)
    return console.log(await res.json())
}

async function gotLocation(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude
    console.log(position)
    console.log(await report(lat, long))

}

function failedLocation(){
    console.log("There is some location issues")
}

function fn(){
    const res= navigator.geolocation.getCurrentPosition(gotLocation,failedLocation)
    console.log(res)
}

fn()
