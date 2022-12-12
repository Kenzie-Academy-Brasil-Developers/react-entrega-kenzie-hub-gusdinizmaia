import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledClose, StyledWrapper } from "../ModalCreateTech/style";
import { StyledFormEdit } from "./style";
import { Button } from "../Button";
import { InputForm } from "../InputForm";
import { Error } from "../Error";
import { api } from "../../services/api";

export function ModalEditTech({ closeModal, callback, elem }) {
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

  function putTech(data) {
    console.log(errors, register, data, elem.id);

    api
      .put(`users/techs/${elem.id}`, data)
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  }

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
            onChange={(e) => e.target.value}
            {...register("status")}
            name=""
            id=""
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
