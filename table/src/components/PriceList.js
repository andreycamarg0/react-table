import '../style/custom.css';
import { useState } from 'react';
import {Button} from 'react-bootstrap/Button';

function PriceList() {
    let valor_a = 1;
    let valor_b = 2;
    let [total, setTotal] = useState(valor_a + valor_b)

    function acaoBotao() {
        setTotal(total + 1);
        console.log("teste")
    }

    return (
        <div>
            <table className='tabela'>
                <tbody>
                    <tr>
                        <td colspan="6">Vendas</td>
                    </tr>
                    <tr className='escuro'>
                        <td>#</td>
                        <td>Produto</td>
                        <td>Categoria</td>
                        <td className='direita'>Qtde</td>
                        <td className='direita'>Preço Unitario</td>
                        <td className='direita'>Total</td>
                    </tr>
                    <tr className='claro'>
                        <td>1</td>
                        <td>Produto 1</td>
                        <td>Categoria 1</td>
                        <td className='direita'>5</td>
                        <td className='direita'>R$ 10,00</td>
                        <td className='direita'>R$ 50,00</td>
                    </tr>
                    <tr className='escuro'>
                        <td>2</td>
                        <td>Produto 2</td>
                        <td>Categoria 2</td>
                        <td className='direita'>4</td>
                        <td className='direita'>R$ 35,00</td>
                        <td className='direita'>R$ 140,00</td>
                    </tr>
                    <tr className='claro'>
                        <td>3</td>
                        <td>Produto 3</td>
                        <td>Categoria 3</td>
                        <td className='direita'>3</td>
                        <td className='direita'>R$ 41,00</td>
                        <td className='direita'>R$ 123,00</td>
                    </tr>
                    <tr className='escuro'>
                        <td colspan="3"></td>
                        <td className='direita'>12</td>
                        <td className='direita'>R$ 86,00</td>
                        <td className='direita'>R$ 313,00</td>
                    </tr>

                    <tr>
                        <th>Valor 1</th>
                        <th>Valor 2</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>{valor_a}</td>
                        <td>{valor_b}</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <Button onClick={acaoBotao} variant="primary">Primary</Button>{' '}

        </div>
    );
}

export default PriceList;   