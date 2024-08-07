import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useLocation } from 'react-router-dom';

function Stock() {
    const location = useLocation();
    const { email } = location.state;

    const showStock = () => {

    }

    return (
        <div className=''>

        </div>
    )
}

export default Stock