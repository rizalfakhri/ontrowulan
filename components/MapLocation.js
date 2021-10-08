import dynamic from 'next/dynamic'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { markerIcon } from '../lib/markerIcon'

const MapLocation = () => {
  return (
    <MapContainer center={[-6.3545606, 106.6904589]} zoom={15} scrollWheelZoom={false} style={{width: '100%', height: '100%'}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=0bfbc32d42c74e3886e4b2832a2ab7b4"
      />
      <Marker
        position={[-6.3545606, 106.6904589]}
        icon={markerIcon}
      >
      </Marker>
    </MapContainer>
  )
}

export default dynamic(() => Promise.resolve(MapLocation), {
  ssr: false
})
