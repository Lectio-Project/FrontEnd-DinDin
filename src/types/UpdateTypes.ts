interface ChildProps {
    setShowModal: (value: boolean) => void;
}
interface UpdateFormTypes {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

type InputEdit = {
    name: string;
    type: string;
    placeholder: string;
    required?: boolean;
    registerTitle: string;
};


