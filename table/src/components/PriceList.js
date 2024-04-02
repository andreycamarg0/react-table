import { Button } from 'react-bootstrap';
import '../style/custom.css';
import {useState} from 'react';


function PriceList() {
    let id_produto_1 = 1;
    let id_produto_2 = 2;
    let id_produto_3 = 3;
    var nome_produto1 = "Produto 1";
    let nome_produto2 = "Produto 2";
    let nome_produto3 = "Produto 3";
    let id_categoria_1 = "Categoria 1";
    let id_categoria_2 = "Categoria 2";
    let id_categoria_3 = "Categoria 3";
    let qtde_1 = 5 ;
    let qtde_2 = 4 ;
    let qtde_3 = 3 ;
    let preco_unitario1 = "R$ 10.00" ;
    let preco_unitario2 = "R$ 35.00" ;
    let preco_unitario3 = "R$ 41.00" ;
    let total1 = qtde_1 * preco_unitario1 ;  
    let total2 = qtde_2 * preco_unitario2 ; 
    let total3 = qtde_3 * preco_unitario3 ;
    let total = total1 + total2 + total3

    return (
        <div>
            <table className='tabela' striped="columns">
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
                        <td>{id_produto_1}</td>
                        <td>{nome_produto1}</td>
                        <td>{id_categoria_1}</td>
                        <td className='direita'>{qtde_1}</td>
                        <td className='direita'>{preco_unitario1}</td>
                        <td className='direita'>{total1}</td>
                    </tr>
                    <tr className='escuro'>
                        <td>{id_produto_2}</td>
                        <td>{nome_produto2}</td>
                        <td>{id_categoria_2}</td>
                        <td className='direita'>{qtde_2}</td>
                        <td className='direita'>{preco_unitario2}</td>
                        <td className='direita'>{total2}</td>
                    </tr>
                    <tr className='claro'>
                        <td>{id_produto_3}</td>
                        <td>{nome_produto3}</td>
                        <td>{id_categoria_3}</td>
                        <td className='direita'>{qtde_3}</td>
                        <td className='direita'>{preco_unitario3}</td>
                        <td className='direita'>{total3}</td>
                    </tr>
                    <tr className='escuro'>
                        <td colspan="3"></td>
                        <td className='direita'>12</td>
                        <td className='direita'>R$ 86,00</td>
                        <td className='direita'>{total}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            
        </div>
    );
}

export default PriceList;   