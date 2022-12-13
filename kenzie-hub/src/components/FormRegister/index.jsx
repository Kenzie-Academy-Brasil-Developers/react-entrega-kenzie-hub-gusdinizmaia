import { StyledForm } from "../FormLogin/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RenderInputsForm } from "../RenderInputsForm";
import { InputsRegister } from "../../database/inputsFormRegister";
import { Error } from "../Error";

export function FormRegister() {
  const formRequired = yup.object().shape({
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
        if (resp.status === 201) {
          toast.success("Conta cadastrada com sucesso");
          return navigate("/login");
        }
        return toast.error(resp.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }

  return (
    <StyledForm action="" onSubmit={handleSubmit(postRegisterUser)}>
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      <RenderInputsForm
        array={InputsRegister}
        hook={register}
        errors={errors}
      />
      <label htmlFor="">Selecionar módulo</label>
      <select defaultValue="" {...register("course_module")}>
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
      </select>{" "}
      {errors.course_module && <Error message={errors.course_module.message} />}
      <Button text="cadastrar" type="submit" model="primary-negative"></Button>
    </StyledForm>
  );
}
