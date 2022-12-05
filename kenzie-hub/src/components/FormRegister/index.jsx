import { StyledForm } from "../FormLogin/style";
import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function FormRegister() {
  const formRequired = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    name: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatório"),
    bio: yup.string().required("Bio obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Selecionar o curso obrigatório"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  function postRegisterUser(data) {
    console.log(data);

    api
      .post("users", data)
      .then((resp) => console.log(resp))
      .then((resp) =>
        resp.status === 201
          ? navigate("/login")
          : toast(resp.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            })
      )
      .catch((err) =>
        toast(err, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      );
  }

  return (
    <StyledForm action="" onSubmit={handleSubmit(postRegisterUser)}>
      <ToastContainer />
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      {/* <InputForm
        text="Casa"
        register={register}
        property="casa"
        errors={errors}
      /> */}
      <label htmlFor="">Email</label>
      <input
        placeholder="Digite aqui seu email"
        type="text"
        {...register("email")}
      />
      {errors.email?.message}
      <label htmlFor="">Nome</label>
      <input
        placeholder="Digite aqui seu nome"
        type="text"
        {...register("name")}
      />
      <label htmlFor="">Senha</label>
      <input
        placeholder="Digite aqui sua senha"
        type="text"
        {...register("password")}
      />
      <label htmlFor="">Confirmar Senha</label>
      <input placeholder="Digite aqui novamente sua senha" type="text" />
      <label htmlFor="">Contato</label>
      <input
        placeholder="Opção de contato"
        type="text"
        {...register("contact")}
      />
      <label htmlFor="">Bio</label>
      <input placeholder="Fale sobre você" type="text" {...register("bio")} />
      <select {...register("course_module")}>
        <option value="" disabled selected>
          Escolha módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
      <Button text="cadastrar" type="submit" model="primary-negative"></Button>
    </StyledForm>
  );
}
