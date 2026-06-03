import './index.scss'
import App from '../../App';
import { useState, useEffect } from 'react'
import { CircleLoader } from 'react-spinners';

const Spinner = ({ isLoading }) => {
    const [showSpinner, setShowSpinner] = useState(true)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        if (isLoading) {
            setShowSpinner(true)
            setIsFading(false)
        } else {
            setIsFading(true)
        }
    }, [isLoading]);

    const handleTransitionEnd = () => {
        if(!isLoading) {
            setShowSpinner(false)
        }
    };

    if (!showSpinner) return null;

    return (
        <>
            <div className={`spinner ${isFading ? 'fade-out' : ''}`}
            onTransitionEnd={handleTransitionEnd}>
                <CircleLoader color='red'/>
            </div>
        </>
    );
}

export default Spinner;