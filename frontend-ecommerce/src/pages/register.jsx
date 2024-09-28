import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { URLAPIECOMMERCE, useFetchApiPost } from "../useFetchApi";

const BgColor = styled.div`
  background-color: #f0f0f5;
  min-height: calc(100vh - 80px);
  padding: 20px 160px 20px 160px;
`;

const Card = styled.div`
  background-color: #ffff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 25%;
`;

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 130px);
`;

const Container = styled.div`
  padding: 29px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    font-family: "Saira";
    color: #737380;
    margin-left: 8px;
  }

  input {
    padding-left: 20px;
    background-color: #f3f5f6;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 42px;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-family: "Saira";
  }

  .second-label {
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
    background-color: #115d8c;
    font-family: "Saira";
    color: #ffffff;
    height: 53px;
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      transition: 0.2s ease-in-out;
      box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.2);
    }
  }

  .d-flex {
    display: flex;
    gap: 20px;
  }

  .space {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
  }

  small {
    font-family: "Saira";
    color: #737380;
  }

  .warning {
    color: #844fc8;
    cursor: pointer;
  }

  .lbl-info {
    display: flex;
    justify-content: end;
    margin-top: 12px;
  }
`;

export const RegisterUser = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    if (data?.senha !== data?.confirm_password) {
      return toast.error("Senhas não coincidem");
    }
    try {
      const { response, result } = await useFetchApiPost(
        `${URLAPIECOMMERCE}cliente`,
        data
      );

      if (response?.status === 201) {
        return toast.success("Usuário cadastrado com sucesso!");
      }
      if (response?.status === 409) {
        return toast.error("Já existe um usuário com esse email");
      }
    } catch (error) {
      toast.error("Erro ao registrar usuário");
    }
  };

  return (
    <BgColor>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <AlignCenter>
          <Card>
            <Container>
              <div className="d-flex">
                <div className="space">
                  <label for="nome">Nome</label>
                  <input type="text" id="nome" {...register("nome")} />
                </div>
                <div className="space">
                  <label for="sobrenome">Sobrenome</label>
                  <input
                    type="text"
                    id="sobrenome"
                    {...register("sobrenome")}
                  />
                </div>
              </div>
              <label for="email" className="second-label">
                E-mail
              </label>
              <input type="email" id="email" {...register("email")} />
              <label for="senha" className="second-label">
                Senha
              </label>
              <input type="password" id="senha" {...register("senha")} />
              <label for="confirm_password" className="second-label">
                Confirmar senha
              </label>
              <input
                type="password"
                id="confirm_password"
                {...register("confirm_password")}
              />
              <button>CADASTRAR-SE</button>
              <div className="lbl-info">
                <small>Já possui uma conta?&nbsp;</small>
                <small className="warning" onClick={() => navigate(`/login`)}>
                  Fazer login
                </small>
              </div>
            </Container>
          </Card>
        </AlignCenter>
      </form>
    </BgColor>
  );
};
