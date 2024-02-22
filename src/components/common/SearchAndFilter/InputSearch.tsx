/* eslint-disable no-unused-vars */
// import Icons from '@/assets/icons';

type InputSearchboxProp = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search?: string;
  className?: string;
  value?: string;
  name?: string;
};
export const InputSearch = ({
  placeholder,
  onChange,
  search,
  className,
  name,
}: InputSearchboxProp) => {
  return (
    <div
      className={`flex h-9 w-[400px] items-center rounded-[9px] border border-dark-light px-[16px] ${className}`}
    >
      {/* <Icons.SearchIcon /> */}
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={search}
        placeholder={placeholder}
        className="w-full border-[0px] bg-white p-2 text-xs outline-[0px] placeholder:text-[13.5px] placeholder:lowercase focus:border-none focus:outline-0"
      />
    </div>
  );
};
