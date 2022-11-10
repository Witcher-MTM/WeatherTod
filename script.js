class Weather{
    constructor(city){
        this.city = city;
    }
    url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=5bd718a0c93b2bc4970bb4be93455992`;
    geo_url = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=5bd718a0c93b2bc4970bb4be93455992`;
    coords_city = {"lat":0,"lan":0};
    createGeoCords(){
        fetch(this.geo_url,{
            method:"GET",
            mode:"no-cors"
        }).then(function (res){
            this.coords_city["lat"] = res.lat;
            this.coords_city["lan"] = res.lan;
        });
       this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.coords_city["lat"]}&lon=${this.coords_city["lan"]}&appid=5bd718a0c93b2bc4970bb4be93455992`;

    }
    GetWeather(){
        this.createGeoCords();
        fetch(this.url,{
            method:"GET",
            mode:"no-cors"
        }).then(function (res){
           console.log(res);
        });
    }


}

function SelectTown(){
    var w = new Weather();
    w.GetWeather();

}