import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";

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
      className={clsx("flex w-full text-center", className)}
    >
      <input
        {...register("search", {
          required: true,
          value: phrase,
          minLength: 2,
        })}
        placeholder={placeholder}
        className="flex-1 min-w-0 border border-primary px-3 py-2 rounded-l focus:outline-none focus:shadow-none"
      />

      <button
        type="submit"
        className="px-4 py-2 border border-l-0 border-primary text-primary rounded-r transition hover:bg-primary/80 hover:text-white focus:outline-none"
      >
        Знайти
      </button>
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
