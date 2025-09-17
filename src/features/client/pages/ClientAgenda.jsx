import CardBasic from '../../common/components/cards/CardBasic';
import ListConsulta from '../../common/components/list-item/ListConsulta';
import AgendarButton from '../../common/components/buttons/AgendarButton';
import { useState } from "react"
import FormPopUp from "../../common/layouts/form/FormPopUp"

import Input from "../../common/components/form/Input"


function ClientAgenda() {
    const [activeForm, setActiveForm] = useState(false);
    const [V, setVv] = useState()

    function submit_form() {
        setActiveForm(false)
        alert("Formulário enviado")
    }
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
            </CardBasic>
            <AgendarButton text="Agendar" onClickEvent={() => setActiveForm(true)}></AgendarButton>
            <FormPopUp visible={activeForm} setVisible={setActiveForm} confirmAction={submit_form}>
                <Input setValue={setVv} placeHolder="Nome"></Input>
                <Input setValue={setVv} placeHolder="E-mail"></Input>
            </FormPopUp>
        </>
    )
}

export default ClientAgenda