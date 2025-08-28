import CardBasic from '../../common/components/cards/CardBasic';
import ListConsulta from '../../common/components/list-item/ListConsulta';


function ClientHome() {
    return (
        <>
        
            <CardBasic title="Últimas Consultas">
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
            </CardBasic>
            <CardBasic title="Próxima consulta">
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
            </CardBasic>

        </>
    )
}

export default ClientHome