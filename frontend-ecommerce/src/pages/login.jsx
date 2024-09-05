import styled from "styled-components";

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
    height: 40px;
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
`;

export const Login = () => {
  return (
    <BgColor>
      <AlignCenter>
        <Card>
          <Container>
            <label>Login</label>
            <input></input>

            <label className="second-label">Senha</label>
            <input></input>
            <button>FAZER LOGIN</button>
          </Container>
        </Card>
      </AlignCenter>
    </BgColor>
  );
};
