import './Input.scss';
type InputProps = {
    value: string;
    onValChange: (val: string) => void;
};
declare function Input(props: InputProps): import("react").JSX.Element;
export default Input;
