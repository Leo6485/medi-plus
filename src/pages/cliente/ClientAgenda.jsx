import CardBasic from '../../components/cards/basic/CardBasic';
import ListConsulta from '../../components/list-item/consulta/ListConsulta';
import AgendarButton from '../../components/buttons/AgendarButton';




function ClientAgenda() {
    return (
        <>
            <CardBasic title="Aguardando">
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
            </CardBasic>
            <CardBasic title="Finalizadas">
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
            </CardBasic>
            <AgendarButton text="Agendar consulta"></AgendarButton>
        </>
    )
}

export default ClientAgenda