var express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/campgrounds', (req, res) => {
    var campgrounds = [
        {name: "Salomen's Creek", image: "https://www.w3schools.com/images/w3schools_green.jpg"},
        {name: "Joshua's Dock", image: "https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/mangaotaki-rocks.jpg?focalpointx=50&focalpointy=50&height=528&outputformat=jpg&quality=75&source=2045739&transformationsystem=focalpointcrop&width=1536&securitytoken=43C008B3EF4D83FA5B72A55FB0BF47BA"},
        {name: "Gandalf's Den", image: "https://farm1.nzstatic.com/_proxy/imageproxy_1y/serve/gandalf.jpg?focalpointx=50&focalpointy=50&height=300&outputformat=jpg&quality=75&source=2749740&transformationsystem=focalpointcrop&width=300&securitytoken=2E8145E327BFCFB181C59BF0D355FB87"},
        ]
    
    res.render("campgrounds", {campgrounds: campgrounds});
})
app.listen(process.env.PORT, process.env.IP, () => {
    console.log("IT HAS STARTED!");
})