type Input = {
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
};

type Button = {
    title: string;
    type: any;
    className: string;
};

export type { Input, Button };
