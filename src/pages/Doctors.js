import React from 'react'

export default function Doctors() {
    return (
        <div className='text-white'>
            <div className='grid place-items-center'>
                <h1 className='text-5xl font-semibold py-2'>Doctors</h1>
                <div className="bg-secondary w-36 h-1 rounded-full"></div>
            </div>

            <div className='grid place-items-center py-8'>
                <h1 className='text-5xl font-semibold py-2'>Nearby Hospitals and Pharmacies</h1>
                <div className="bg-secondary w-96 h-1 rounded-full"></div>
                <iframe src="http://127.0.0.1:5500/public/map/map.html#" title="map" width="1200px" height="600px" className='my-4 border-2 border-secondary bg-white' />
            </div>

        </div>
    )
}
