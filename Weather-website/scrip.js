function changeWeather() {

    const temps = ["25°C", "27°C", "29°C", "31°C"];
    const conditions = ["Sunny", "Cloudy", "Rainy", "Windy"];

    let randomTemp =
        temps[Math.floor(Math.random() * temps.length)];

    let randomCondition =
        conditions[Math.floor(Math.random() * conditions.length)];

    document.getElementById("temp").innerHTML = randomTemp;
    document.getElementById("condition").innerHTML = randomCondition;
}