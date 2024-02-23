import { Input } from '@/types/Signup';

export default function Input({
    name,
    type,
    placeholder,
    onChange,
    value,
    required
}: Input) {
    return (
        <div className="flex flex-col gap-[0.375rem] w-full font-primary font-normal text-lg text-gray-484848">
            <label htmlFor={name}>{placeholder}</label>
            <input
                id={name}
                name={name}
                type={type}
                className="h-[4rem] px-[0.5rem] bg-white border border-gray-555 rounded-md"
                onChange={onChange}
                value={value}
                required={required}
            />
        </div>
    );
}

//O componente será reutilizado