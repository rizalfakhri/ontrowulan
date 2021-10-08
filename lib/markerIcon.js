import L from 'leaflet';
import marker from '../public/marker.png'

const markerIcon = new L.Icon({
    iconUrl: marker.src,
    iconRetinaUrl: marker.src,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
});

export { markerIcon };
