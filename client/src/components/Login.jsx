import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Login = ({ toggleDiv, setDiv }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [updateDiv, setUpdateDiv] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");

  const toggleUpdateDiv = () => {
    setUpdateDiv(!updateDiv);
    setError("");
  };

  const handleLogin = async (e) => {
    setUpdateDiv(true);
    setError("");
    e.preventDefault();

    let login = {
      email: email,
      password: password,
    };

    login = JSON.stringify(login);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: login,
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        if (response.status === 401) {
          return setError("Usuário ou senha inválidos");
        }
      } else {
        const data = await response.json();
        return setUser(data);
      }
    } catch (error) {
      return setError("Erro ao acessar o servidor");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
    setError("");
    setUpdateDiv(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    let info = {
      newName: newName,
      newEmail: newEmail,
      newPassword: newPassword,
      id: user.id,
    };

    try {
      if (newPassword.length >= 6) {
        info = JSON.stringify(info);

        const response = await fetch("http://localhost:3000/edituser", {
          method: "POST",
          body: info,
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          if (response.status === 401) {
            return setError("Este email já está em uso");
          }
        }

        setError("Usuário alterada com sucesso!");
      } else {
        return setError("Insira uma senha maior que 6 caracteres");
      }
    } catch (err) {
      return setError("Erro ao acessar o servidor");
    }
  };

  const handleRemove = async (e) => {
    e.preventDefault();

    let id = { id: user.id };

    try {
      if (id) {
        id = JSON.stringify(id);

        const response = await fetch("http://localhost:3000/removeuser", {
          method: "POST",
          body: id,
          headers: { "Content-Type": "application/json" },
        });

        toggleDiv();
      }
    } catch (err) {
      return setError("Erro ao acessar o servidor");
    }
  };

  return (
    <div className="user-container">
      <Helmet>
        <title>Entrar</title>
      </Helmet>
      {user == null ? (
        <div className="login-container">
          <h2>Entrar</h2>
          <form className="form-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="password"
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn-login"
              onClick={(e) => {
                handleLogin(e);
              }}>
              Entrar
            </button>
            <p>{error}</p>
          </form>
          <p>Não possui conta?</p>
          <button
            className="btn-create"
            onClick={() => {
              toggleDiv();
            }}>
            Criar Conta
          </button>
        </div>
      ) : (
        <div className="user-connected-container">
          <div className="user-actions-container">
            <h2>Seja bem-vindo, {user.name}!</h2>
            <button className="btn-login" onClick={(e) => handleLogout(e)}>
              Sair
            </button>
            <button className="btn-login" onClick={(e) => toggleUpdateDiv()}>
              Editar usuário
            </button>
            <form>
              <input type="hidden" name="id" />
              <button
                id="btn-removeuser"
                type="submit"
                onClick={(e) => handleRemove(e)}>
                Apagar conta
              </button>
            </form>
          </div>
          {updateDiv ? (
            ""
          ) : (
            <div className="edituser-container">
              <h3>Edite suas informações</h3>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite o novo nome"
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o novo email"
                  onChange={(e) => setNewEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Digite a nova senha"
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  id="btn-edituser"
                  className="btn-back"
                  onClick={(e) => handleUpdate(e)}>
                  Concluir
                </button>
              </form>
              <p>{error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
