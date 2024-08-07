import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './material.css'
import { useLocation } from 'react-router-dom';

function Material() {
    const location = useLocation();
    const { email } = location.state;

    const showMaterial = () => {

    }

    return (
        <div className='body'>
            <div class="container">
                <h1>Material Design - Tabela</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Coluna 1</th>
                            <th>Coluna 2</th>
                            <th>Coluna 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Parágrafo 1 da linha 1</p></td>
                            <td><p>Parágrafo 2 da linha 1</p></td>
                            <td><p>Parágrafo 3 da linha 1</p></td>
                        </tr>
                        <tr>
                            <td><p>Parágrafo 1 da linha 2</p></td>
                            <td><p>Parágrafo 2 da linha 2</p></td>
                            <td><p>Parágrafo 3 da linha 2</p></td>
                        </tr>
                        <tr>
                            <td><p>Parágrafo 1 da linha 3</p></td>
                            <td><p>Parágrafo 2 da linha 3</p></td>
                            <td><p>Parágrafo 3 da linha 3</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Material