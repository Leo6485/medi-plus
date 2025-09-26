import ListConsulta from "../../../components/client/ListConsulta"


function ClientCirurgias() {
    
    const cirurgias = [
        {
            name: "Cardiologia - Dr. Pedro Silva",
            info: "Rua sem volta, N: 2000"
        }
    ]
    return (
        <>
            <ListConsulta title="Aguardando" data={[]}></ListConsulta>
            <ListConsulta title="Finalizadas" data={cirurgias}></ListConsulta>
        </>
    )
}

export default ClientCirurgias