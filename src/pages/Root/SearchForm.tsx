import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const onSubmit = ({ search }: FormValues) => {
    const formattedSearch = search.trim().toLowerCase();

    navigate(`/search/${encodeURIComponent(formattedSearch)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form text-center">
      <div className="input-group">
        <input
          {...register("search", { required: true })}
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
