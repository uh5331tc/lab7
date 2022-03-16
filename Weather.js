const forecastTable = document.querySelector("#weather-forecast")

fetch("https://api.weather.gov/gridpoints/MPX/116,72/forecast")
    .then(response => response.json())
    .then(weatherData => {
        showForecastInTable(weatherData)
    })

    function showForecastInTable(weatherData) {

        let forecastPeriods = weatherData.properties.periods
        console.log(forecastPeriods)
        

        forecastPeriods.forEach( forecast =>  {
            let tableRow = document.createElement("tr") // make more tr elements 
            // need to repeate this for more td eleements one for temp and one for detailed forecast

            let tableDataCellDay = document.createElement("td")
            let tableDataCellTemp = document.createElement("td")
            let tableDataCellDesc = document.createElement("td")
            let tableDataCellIcon = document.createElement("td")
            let tableDataDetails = document.createElement("td")
            let weatherIconImg = document.createElement("img")

            let name = forecast.name
            let temperature = forecast.temperature
            let temperatureUnit = forecast.temperatureUnit
            let detailedForecast = forecast.detailedForecast
            let iconURL = forecast.icon



            tableDataCellDay.innerHTML = name
            tableDataCellTemp.innerHTML = `${temperature}&#176 ${temperatureUnit}`  // degree symbol

            tableRow.appendChild(tableDataCellDay)
            tableRow.appendChild(tableDataCellTemp)

            //icon
            weatherIconImg.src = iconURL
            tableDataCellIcon.appendChild(weatherIconImg)
            tableRow.appendChild(tableDataCellIcon)



            forecastTable.appendChild(tableRow)



        })


    }