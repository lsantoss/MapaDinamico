function search() {
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();

    if (latitude === "" || longitude === "") {
        removeMap();
        toastr.error("Latitude and Longitude fields are required!");
    }
    else {
        showMap(latitude, longitude);
    }
}

function removeMap() {
    var mapa = $("#location-map");
    if(mapa != null) {
        mapa.remove();
    }
}

function showMap(latitude, longitude) {
    $("#container-map").html("<div id='location-map' style='visibility: hidden'></div>");

    var map = L.map('location-map').setView([latitude, longitude], 17);

    map.setMaxBounds([[84.67351256610522, -174.0234375], [-58.995311187950925, 180.1421875]]);

    mapLink = '&copy; <a href="https://github.com/lsantoss?tab=repositories">Lucas Santos - Github</a>';

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        attribution: mapLink,
        minZoom: 3,
        maxZoom: 19,
        noWrap: true,
    }).addTo(map);
    
    L.marker([latitude, longitude]).addTo(map);

    $("#location-map").css("visibility", "visible");
    toastr.success("Coordinate found successfully!");
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};