import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import "./style.scss";

const SearchForm = () => {
  const { phrase } = useParams();
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = ({ search }: FormValues) => {
    const formattedSearch = search.trim().toLowerCase();

    navigate(`/search/${encodeURIComponent(formattedSearch)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="search-form form text-center">
      <div className="input-group">
        <input
          {...register("search", { required: true, value: phrase  })}
          className="form-control"
          placeholder="Ножиці"
        />

        <button type="submit" className="search-button btn btn-outline-warning">
          Знайти
        </button>
      </div>
    </form>
  );
};

type FormValues = {
  search: string;
};

export default SearchForm;
