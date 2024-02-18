import { Input } from '@/types/Input';

export default function Input({ name, type, placeholder, required }: Input) {
    return (
        <div className="flex flex-col gap-2 max-w-full font-primary">
            <label htmlFor={name}>{placeholder}</label>
            <input
                id={name}
                name={name}
                type={type}
                className="w-full h-16 px-2 bg-white text-black border border-gray-300 rounded-md"
                required={required}
            />
        </div>
    );
}
