import { StyledClose, StyledForm, StyledWrapper } from "./style";
import { Button } from "../Button";
import { InputForm } from "../InputForm";
import { Error } from "../Error";
import { api } from "../../services/api.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function ModalCreateTech({ closeModal, callback }) {
  const formRequired = yup.object().shape({
    title: yup.string().required("A tecnologia requer um nome"),
    status: yup.string().required("A tecnologia requer status"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  return (
    <StyledWrapper>
      <StyledForm>
        <div>
          <h4>Cadastrar Tecnologia</h4>
          <StyledClose onClick={(e) => closeModal(false)} />
        </div>
        <form onSubmit={handleSubmit(callback)} action="">
          <InputForm
            text="Nome"
            property="title"
            register={register}
            errors={errors}
          />
          <label htmlFor="">Selecionar status</label>
          <select {...register("status")} name="" id="">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <Error message={errors.status.message} />}
          <Button model="primary" text="Cadastrar Tecnologia" type="submit" />
        </form>
      </StyledForm>
    </StyledWrapper>
  );
}
