/**
 * TabelaMedicamentos.js
 * 
 * Esta tabela mostra a lista de medicamentos.
 */

import React, { Component } from "react";

function Cabecalho() {
    return(
        <thead>
            <tr>
                <th>Nome</th>
                <th>Laboratório</th>
                <th>Observações</th>
                <th>Foto</th>
            </tr>
        </thead>
    )
}

const Corpo = (props) => {
    const linhas = props.dadosTabelaIN.map((medicamento) => {
        return(

            <tr key={medicamento.Id}>
                <td>{medicamento.Nome}</td>
                <td>{medicamento.Laboratorio}</td>
                <td>{medicamento.Observacoes}</td>
                <td>
                    <img
                        src={'Fotos/' + medicamento.Foto}
                        alt={'Foto de ' + medicamento.Nome}
                        title={medicamento.Nome}
                        height="50"
                    />
                </td>
                <td>
                    <button className="btn btn-outline-danger"
                        onClick={() => props.medicamentoRemoverOUT(medicamento.Id)}
                    >Apagar</button>
                </td>
            </tr>

        )
    })
}

class TabelaMedicamentos extends React.Component {

    render() {

        const { dadosMedicamentosIN } = this.props;

        return(
            <table className="table table-striped">
                <Cabecalho />
                <Corpo 
                    dadosTabelaIN={dadosMedicamentosIN}
                    medicamentoRemoverOUT={apagaMedicamentoOUT}
                />
            </table>
        )

    }

}

export default TabelaMedicamentos
