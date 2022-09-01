import type { NextPage } from "next";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import styles from "./styles.module.scss";

const Login: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Pague os 50 centavos</h3>
      <div className={styles.card}>
        <h2>Login</h2>
        <span>
          <InputText id="email" placeholder="E-mail" type="email" />
        </span>
        <span>
          <InputText id="senha" type="password" placeholder="Senha" />
        </span>

        <Button label="Entrar" className="p-button-primary" />
      </div>
    </div>
  );
};

export default Login;
