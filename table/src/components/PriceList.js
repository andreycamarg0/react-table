import { Button } from 'react-bootstrap';
import '../style/custom.css';
import {useState} from 'react';


function PriceList() {
    let produto1 = {
        id: 1,
        nome_produto1: "Produto 1",
        categoria: "Categoria 1",
        qtde: 5,
        preco_unitario: 10.00,
        total: 50,
    }

    let produto2 = {
        id: 2,
        nome_produto: "Produto 2",
        categoria: "Categoria 2",
        qtde: 4,
        preco_unitario: 35.00,
        total: 140,
    }

    let produto3 = {
        id: 3,
        nome_produto: "Produto 3",
        categoria: "Categoria 3",
        qtde: 3,
        preco_unitario: 41.00,
        total3: 164,
    }

    let lista_produto = {
        produto1,
        produto2,
        produto3
    }

    lista_produto.map(
        function (produto){
            return 
        }
    )

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
                        <td>{produto1.id}</td>
                        <td>{produto1.nome_produto1}</td>
                        <td>{produto1.categoria}</td>
                        <td className='direita'>{produto1.qtde}</td>
                        <td className='direita'>{produto1.preco_unitario}</td>
                        <td className='direita'>{produto1.total}</td>
                    </tr>
                    <tr className='escuro'>
                        <td>{produto2.id}</td>
                        <td>{produto2.nome_produto}</td>
                        <td>{produto2.categoria}</td>
                        <td className='direita'>{produto2.qtde}</td>
                        <td className='direita'>{produto2.preco_unitario}</td>
                        <td className='direita'>{produto2.total}</td>
                    </tr>
                    <tr className='claro'>
                        <td>{produto3.id}</td>
                        <td>{produto3.nome_produto}</td>
                        <td>{produto3.categoria}</td>
                        <td className='direita'>{produto3.qtde}</td>
                        <td className='direita'>R$ {produto3.preco_unitario}</td>
                        <td className='direita'>R$ {produto3.total}</td>
                    </tr>
                   
                </tbody>
            </table>
            <br />
            
        </div>
    );
}

export default PriceList;   