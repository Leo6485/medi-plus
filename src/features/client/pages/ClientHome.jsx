import NextConsulta from '../../../components/client/NextConsulta';
import CheckList from '../../../components/common/CheckList';
import styles from "./Cliente.module.css"
import AgendarButton from '../../../components/client/AgendarButton';
import News from '../../../components/client/News';
import PopUp from '../../../components/common/popUp/PopUp';
import { useState } from 'react';
import FullPage from '../../../components/common/fullPage/FullPage';

function ClientHome() {
    const [vInfo, setVInfo] = useState(false)
    const [vAgendar, setVAgendar] = useState(false)
    const consulta_lista = [
      { text: "Cardiologista", checked: true },
      { text: "Nutricionista", checked: true },
      { text: "Cardiologista", checked: false }
    ];

const markdown = `
- **Campanha de vacinação contra gripe:** 01/10 a 15/10. Traga seu cartão de vacinação.
- **Suspensão temporária de consultas de ortopedia:** 29/09, devido à manutenção de equipamentos.
`;






    return (
        <div className={styles.container}>
        <NextConsulta title="Cardiologista" text="Cardiologia - 28/09, 14:30. Lembre-se do jejum de 8 horas." onClick={() => setVInfo(true)}></NextConsulta>
        <PopUp visible={vInfo} setVisible={setVInfo}></PopUp>
        <CheckList list={consulta_lista} title="Consultas no mês"></CheckList>
        <AgendarButton onclick={() => setVAgendar(true)}></AgendarButton>
        <FullPage visible={vAgendar} setVisible={setVAgendar} title="Agendar Consulta"></FullPage>
        <News markdown={markdown}></News>
        </div>
    )
}

export default ClientHome