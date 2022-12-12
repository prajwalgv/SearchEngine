export interface IOptions {
    [key: string]: string
}
export interface IAutoCompleteProps {
    options: IOptions[]
    display: [string];
    onChange: any;
    onInputChange?: any;
}