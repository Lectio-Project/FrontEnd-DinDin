import { Input } from '@/types/Signup';

export default function Input({ name, type, placeholder, required }: Input) {
    return (
        <div className="flex flex-col gap-1.5 w-full font-primary font-normal text-lg text-gray-484848">
            <label htmlFor={name}>{placeholder}</label>
            <input
                id={name}
                name={name}
                type={type}
                className="h-16 px-2 bg-white border border-gray-555 rounded-md"
                required={required}
            />
        </div>
    );
}
