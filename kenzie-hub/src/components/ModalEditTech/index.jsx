import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledClose, StyledWrapper } from "../ModalCreateTech/style";
import { StyledFormEdit } from "./style";
import { Button } from "../Button";
import { InputForm } from "../InputForm";
import { Error } from "../Error";
import { useContext } from "react";
import { ApiTechsContext } from "../../contexts/ApiTechsContext";

export function ModalEditTech({ closeModal, callback, elem }) {
  const { putTech } = useContext(ApiTechsContext);

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
      <StyledFormEdit>
        <div>
          <h4>Tecnologia Detalhes</h4>
          <StyledClose onClick={(e) => closeModal(false)} />
        </div>
        <form onSubmit={handleSubmit(putTech)} action="">
          <InputForm
            text="Nome"
            property="title"
            register={register}
            errors={errors}
            value={elem.title}
          />
          <label htmlFor="">Selecionar status</label>
          <select
            defaultValue=""
            onChange={(e) => e.target.value}
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <Error message={errors.status.message} />}
          <div>
            <Button
              model="primary-negative"
              text="Salvar alterações"
              type="submit"
            />
            <Button
              model="grey-2"
              text="Cancelar"
              callback={(e) => closeModal(false)}
            />
          </div>
        </form>
      </StyledFormEdit>
    </StyledWrapper>
  );
}
