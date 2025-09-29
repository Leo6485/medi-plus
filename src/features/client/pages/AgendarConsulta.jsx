import Dropdown from "../../../components/common/form/DropDown";
import Input from "../../../components/common/form/Input";
import FullPage from "../../../components/common/fullPage/FullPage";
import { useState } from "react";

export default function AgendarConsulta({ visible, setVisible }) {
    const [inputName, setInputName] = useState()

    const options = ["Cardiologista", "Nutricionista", "Ortopedista", "Otorrino"]
    return (
        <FullPage visible={visible} setVisible={setVisible} title="Agendar Consulta">
        <div style={{display: "flex", flexDirection: "column", padding: "10px", gap: "10px"}}>
        <Input value={inputName} setValue={setInputName} placeHolder={"Nome"}></Input>
        <Dropdown options={options} title="Tipo"></Dropdown>
        <Dropdown options={options} title="Data"></Dropdown>
        </div>
        </FullPage>
    )
}