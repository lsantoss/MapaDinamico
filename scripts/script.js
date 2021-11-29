function conferirCoordenadas() {
    var latitude = document.querySelector("#latitude").value;
    var longitude = document.querySelector("#longitude").value;

    if (latitude === "" || longitude === "") {
        esconderMapa();
        toastr.error("Preencha a latitude e a longitude!");
    }
    else {
        mostrarMapa();
    }
}

function esconderMapa() {
    var mapa = document.getElementById("location-map")
    if(mapa != null) {
        mapa.remove();
    }
}

function mostrarMapa() {
    var container = L.DomUtil.get('location-map');
        
    if (container != null) { 
        container._leaflet_id = null; 
    }

    var latitude = document.querySelector("#latitude").value;
    var longitude = document.querySelector("#longitude").value;

    if (latitude === "" || longitude === "") {
        esconderMapa();
    }
    else {
        document.getElementById("containerMap").innerHTML = "<div id='location-map' style='visibility: hidden'></div>";

        var map = L.map('location-map').setView([latitude, longitude], 17);
        map.setMaxBounds([[84.67351256610522, -174.0234375], [-58.995311187950925, 180.1421875]]);        
        mapLink = '<a href="https://github.com/lsantoss?tab=repositories">Lucas Santos - Github</a>';
        L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink,
                minZoom: 3,
                maxZoom: 19,
                noWrap: true,
            }).addTo(map);
        var marker = L.marker([latitude, longitude]).addTo(map);

        document.getElementById("location-map").style.visibility = "visible";
        toastr.success("Coordenada encontrada com sucesso!");
    }
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