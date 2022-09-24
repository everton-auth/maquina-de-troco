
export interface Snackbar {
    type: "default" | "info" | "warning" | "error" | "success";
    message: string;
    button?: string;
    horizontalPosition?: "start" | "center" | "end",
    verticalPosition?: "top" | "bottom",
    secondsDuration?: number
}