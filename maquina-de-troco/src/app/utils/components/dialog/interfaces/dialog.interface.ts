import { DialogButton } from "./dialog-button.interface";

export interface Dialog<T> {
    type?: "default" | "info" | "warning" | "error" | "success";
    title: string;
    message?: string;
    textbox?: string;
    buttons?: DialogButton[];
    data?: T;
    component?: any;
    callback?: any;
    width?: any;
    height?: any;
    messageCell?:string
}