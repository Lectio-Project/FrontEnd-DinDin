import { Button } from '@/types/Signup';

export default function Button({ title, type, className }: Button) {
    return (
        <button
            className={`flex justify-center p-[0.75rem] rounded-md font-primary font-bold text-sm bg-primary-lilac text-white hover:opacity-80 focus:opacity-80 ${className}`}
            type={type}
        >
            {title}
        </button>
    );
}
