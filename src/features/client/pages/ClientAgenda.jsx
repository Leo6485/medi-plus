import CardBasic from '../../common/components/cards/CardBasic';
import ListConsulta from '../../common/components/list-item/ListConsulta';
import AgendarButton from '../../common/components/buttons/AgendarButton';




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
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
                <ListConsulta title="Cardiologia - Dr. Pedro Silva" info="Rua sem volta, N: 2000"></ListConsulta>
                <ListConsulta title="Ortopedista - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListConsulta>
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