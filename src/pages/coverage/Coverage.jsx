import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useLoaderData } from 'react-router';
import 'leaflet/dist/leaflet.css';

const position = [23.81236, 90.36409]

const Coverage = () => {
    const branches = useLoaderData();
    const mapRef = useRef(null);


    const searchHandler = e => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = branches.find(b => b.district.toLowerCase().includes(location.toLowerCase()));

        if(district){
            const coordinate = [district.latitude, district.longitude];
            mapRef.current.flyTo(coordinate,15);
        }
    }

    return (
        <>
            <section className='mx-8 sm:mx-16 my-10 p-10 rounded-xl bg-white'>
                <div className='mb-15'>
                    <h3 className="text-3xl font-bold text-secondary mb-4">We are available in 64 district's.</h3>
                    <form onSubmit={searchHandler}>
                        <div className="join">
                            <div>
                                <label className="input validator join-item">
                                    <input type="text" name='location' placeholder="Search district location.." required />
                                </label>
                                <div className="validator-hint hidden">Search district location..</div>
                            </div>
                            <button type='submit' className="btn btn-primary text-black join-item">Search</button>
                        </div>
                    </form>
                </div>
                <div className='h-[600px]'>
                    <h4 className="text-xl font-bold text-secondary mb-5">We deliver almost all over Bangladesh.</h4>
                    <MapContainer
                        className='h-[600px]'
                        center={position}
                        zoom={8}
                        scrollWheelZoom={false}
                        ref={mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            branches.map((branch, index) => <Marker key={index} position={[branch.latitude, branch.longitude]}>
                                <Popup>
                                    <strong>{branch.district}</strong>
                                    <br />
                                    Services Area: {branch.covered_area.join(', ')}
                                </Popup>
                            </Marker>)
                        }
                    </MapContainer>
                </div>
            </section>
        </>
    );
};

export default Coverage;