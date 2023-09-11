import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";

import "./style.scss";

const SearchForm: FC<Props> = ({ className, placeholder }) => {
  const { phrase } = useParams();
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = ({ search }: FormValues) => {
    const formattedSearch = search.trim().toLowerCase();

    navigate(`/search/${encodeURIComponent(formattedSearch)}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("search-form form text-center", className)}
    >
      <div className="input-group">
        <input
          {...register("search", {
            required: true,
            value: phrase,
            minLength: 2,
          })}
          className="form-control"
          placeholder={placeholder}
        />

        <button type="submit" className="search-button btn btn-outline-warning">
          Знайти
        </button>
      </div>
    </form>
  );
};

interface Props {
  className?: string;
  placeholder?: string;
}

type FormValues = {
  search: string;
};

export default SearchForm;
