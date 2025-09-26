import React, {useState} from "react"
import styles from "./Login.module.css"

function Login() {
    const [cpf, setCpf] = useState();
    const [password, setPassword] = useState();
    return (
        <form>
            <h2 className={styles.loginTitle} >Insira seus dados</h2>
                <label htmlFor="cpf">CPF:</label>
                <input
                    className={styles.input}
                    id="cpf"
                    type="text"
                    placeholder="Insira seu CPF aqui"
                    onChange={(e) => setCpf(e.target.value)}
                >
                </input>

                <label htmlFor="password">Password:</label>
                <input
                    className={styles.input}
                    id="password"
                    type="password"
                    placeholder="Insira sua senha aqui"
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>

                <input
                    className={styles.button}
                    id="submit"
                    type="submit"
                ></input>
        </form>
    )
}

export default Login;