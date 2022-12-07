import { StyledForm } from "../FormLogin/style";
import { useForm } from "react-hook-form";
import { InputForm } from "../InputForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RenderInputsForm } from "../RenderInputsForm";
import { InputsRegister } from "../../database/inputsFormRegister";

export function FormRegister() {
  const formRequired = yup.object().shape({
    casa: yup.string().required("eita"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "No minimo 8 caracteres, uma letra, um número e um símbolo"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senha incorreta"),
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
    delete data.confirmPassword;

    api
      .post("users", data)
      .then((resp) => {
        resp.status === 201
          ? navigate("/login")
          : toast(resp.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
      })
      .catch((err) => {
        console.log(err);
        toast(err, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  }

  //   const validate = yup.object().shape({});

  // const {validate, validateState:{errors1}} = useForm({

  // })
  return (
    <StyledForm action="" onSubmit={handleSubmit(postRegisterUser)}>
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      {/* <InputForm
        text="Casa"
        register={register}
        property="casa"
        errors={errors}
      /> */}
      <RenderInputsForm
        array={InputsRegister}
        hook={register}
        errors={errors}
      />
      {/* <label htmlFor="">Email</label>
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
        type="password"
        {...register("password")}
      />
      {errors.password?.message}

      <label htmlFor="">Confirmar Senha</label>
      <input
        placeholder="Digite aqui novamente sua senha"
        type="text"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message}
      <label htmlFor="">Contato</label>
      <input
        placeholder="Opção de contato"
        type="text"
        {...register("contact")}
      />
      <label htmlFor="">Bio</label>
      <input placeholder="Fale sobre você" type="text" {...register("bio")} /> */}
      <label htmlFor="">Selecionar módulo</label>
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
