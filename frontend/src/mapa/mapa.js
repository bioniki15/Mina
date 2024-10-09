import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from '../navbar.js';

const draggableIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'), 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const confirmedIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon-2x.png'), 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const MapComponent = () => {
    const position = [-21.403355212324723, -48.499787582485865]; // Taquaritinga
    const [markerPosition, setMarkerPosition] = useState(position); 
    const [confirmedMarkers, setConfirmedMarkers] = useState([]); 
    const [isConfirmed, setIsConfirmed] = useState(false);

    const moveMarker = (event) => {
        const { lat, lng } = event.target.getLatLng();
        setMarkerPosition([lat, lng]);
    };

    const confirmLocation = () => {
        setConfirmedMarkers([...confirmedMarkers, markerPosition]); 
        setIsConfirmed(true); 
        alert(`Localização confirmada em: ${markerPosition[0]}, ${markerPosition[1]}`);
    };

    const createNewMarker = () => {
        setIsConfirmed(false);
        setMarkerPosition(position); 
    };

    const deleteMarker = (index) => {
        const newMarkers = confirmedMarkers.filter((_, i) => i !== index);
        setConfirmedMarkers(newMarkers);
    };

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <Navbar />
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: "500px", width: "900px" }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {!isConfirmed ? (
                        <Marker 
                            position={markerPosition} 
                            draggable={true}
                            eventHandlers={{ dragend: moveMarker }}
                            icon={draggableIcon}
                        >
                            <Popup>
                                <span>Arraste-me para a localização desejada!</span>
                            </Popup>
                        </Marker>
                    ) : (
                        <Marker 
                            position={markerPosition} 
                            icon={confirmedIcon}
                        >
                            <Popup>
                                <span>Localização já confirmada!</span>
                            </Popup>
                        </Marker>
                    )}
                    {confirmedMarkers.map((pos, index) => (
                        <Marker key={index} position={pos} icon={confirmedIcon}>
                            <Popup>
                                <span>Localização confirmada aqui!</span>
                                <br />
                                <button className="btn btn-danger btn-sm" onClick={() => deleteMarker(index)}>
                                    Apagar Marcação
                                </button>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <div style={{ marginLeft: '20px', alignSelf: 'center' }}>
                <button onClick={confirmLocation} className="btn btn-primary" disabled={isConfirmed}>
                    Confirmar Localização
                </button>
                <br />
                <button onClick={createNewMarker} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Criar Novo Ícone
                </button>
            </div>
        </div>
    );
};

export default MapComponent;
