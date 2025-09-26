import NextConsulta from '../../../components/client/NextConsulta';
import CheckList from '../../../components/common/CheckList';
import styles from "./Cliente.module.css"
import AgendarButton from '../../../components/client/AgendarButton';


function ClientHome() {
    const consulta_lista = [
      { text: "Cardiologista", checked: true },
      { text: "Nutricionista", checked: true },
      { text: "Cardiologista", checked: false }
    ];

    return (
        <div className={styles.container}>
        <NextConsulta title="Cardiologista" text="Cardiologia - 28/09, 14:30. Lembre-se do jejum de 8 horas."></NextConsulta>
        <CheckList list={consulta_lista} title="Consultas no mês"></CheckList>
        <AgendarButton></AgendarButton>
        </div>
    )
}

export default ClientHome