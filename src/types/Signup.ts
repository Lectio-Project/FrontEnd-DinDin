import { ChangeEventHandler } from 'react';

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
