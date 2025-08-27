import CardBasic from '../../components/cards/basic/CardBasic';
import ListCirurgia from '../../components/list-item/cirurgia/ListCirurgia';


function ClientCirurgias() {
    return (
        <>
            <CardBasic title="Aguardando">
            </CardBasic>
            <CardBasic title="Finalizadas">
                <ListCirurgia title="Cirurgia Ortopédica - Dr. Lucas Silva" info="Rua sem volta, N: 2001"></ListCirurgia>
            </CardBasic>
        </>
    )
}

export default ClientCirurgias