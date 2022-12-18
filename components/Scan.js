import {useState, useEffect} from 'react';
import QrReader from 'react-qr-scanner';
import {isMobile} from 'react-device-detect';
import { useRouter } from 'next/router';

const Scan = () => {

    const [camera, setCamera] = useState({});
    const [loadCamera, setLoadCamera] = useState(false);
    // const navigate = useNavigate();
    const router = useRouter();

    useEffect(() => {
        setLoadCamera(true);

        navigator.mediaDevices.enumerateDevices()
            .then((devices) => {
                let videoSelect = [];
    
                devices.forEach((device) => {
                    if (device.kind === 'videoinput') {
                        videoSelect.push(device)
                    }
                })
    
                return videoSelect;
            })
            .then((devices) => {
                setCamera({
                    cameraId: devices[devices.length - 1].deviceId,
                    devices,
                    loading: false,
                })
            })
            .catch(err => console.error(err));

        return;
        //eslint-disable-next-line
    }, [])

    return(
        <>
            <div className=''>
                <div className="flex justify-center items-center pb-4 relative z-[10]">
                    <label className="mx-2 font-bold text-xs text-app-main">Select Camera: </label>
                    <select
                        className="block lg:w-1/3 w-1/2 mx-2 p-2 text-xs border-0 focus:outline-none bg-app-primary text-white font-bold rounded-md"
                        onChange={(e) => setCamera({...camera, cameraId: e.target.value })}
                        >
                        <option value="">Choose Cameras</option>
                        {camera.devices && camera.devices.map(({deviceId, label}, index) => 
                            <option value={deviceId} key={deviceId}>
                                {label || `camera ${index}`}
                            </option>
                        )}
                    </select>
                </div>
                {/* <div className="w-full relative z-[10] px-2">
                    <p>{camera.cameraId}</p>
                    {camera.devices && camera.devices.map(({deviceId, label}, index) => 
                        <p value={deviceId} key={deviceId}>
                            {index+1}. {label || `camera ${index}`} - {deviceId}
                        </p>
                    )}
                </div> */}

                
                {loadCamera && 

                    <div className='relative'>
                        <QrReader
                            delay={300}
                            onError={(err) => console.log(err)}
                            onScan={(data) => data?.text && router.push(`/loans/${data.text}`)}
                            className="reletive flex justify-center items-center rounded-lg overflow-hidden"
                            style={{ transform: isMobile ? 'rotateY(0deg)' : 'rotateY(180deg)' }}
                            constraints={camera?.cameraId && ({ audio: false, video: { deviceId: camera.cameraId } })}
                        />
                        <div className='absolute block top-0 left-0 w-full h-full bg-[url(/img/qr.svg)] bg-cover bg-center'></div>
                    </div>
                }

                <p className='italic text-center p-3 text-sm'>Place QR code in the frame to scan</p>
            </div>
        </>
    );

}

export default Scan;