import ListConsulta from '../../../components/client/ListConsulta';


function ClientAgenda() {
    const consultas = [
        {
            name: "Cardiologia - Dr. Pedro Silva",
            info: "Rua sem volta, N: 2000"
        },
        
        {
            name: "Ortopedista - Dr. Lucas Silva",
            info: "Rua sem volta, N: 2001"
        }
    ]
    return (
        <>
            <ListConsulta title="Aguardando" data={consultas}></ListConsulta>
            <ListConsulta title="Finalizadas" data={consultas}></ListConsulta>
        </>
    )
}

export default ClientAgenda