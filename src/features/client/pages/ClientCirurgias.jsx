import CardBasic from '../../common/components/cards/CardBasic';
import ListCirurgia from '../../common/components/list-item/ListCirurgia';


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