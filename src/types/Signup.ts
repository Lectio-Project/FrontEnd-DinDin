import { ChangeEventHandler } from 'react';

type Input = {
    name: string;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler;
    required?: boolean;
};

type Button = {
    title: string;
    type: any;
    className: string;
};

export type { Input, Button };
