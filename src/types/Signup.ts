import { ChangeEventHandler } from 'react';

//Os types será reutilizado junto com os componentes

type Input = {
    name: string;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler;
    value: string;
    required?: boolean;
};

type Button = {
    title: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    className: string;
};

export type { Input, Button };
