import { Button } from '@/types/Signup';

export default function Button({ title, type, className }: Button) {
    return (
        <button
            className={`flex justify-center p-3 rounded-md font-primary font-bold text-sm bg-primary-lilac text-white ${className}`}
            type={type}
        >
            {title}
        </button>
    );
}
