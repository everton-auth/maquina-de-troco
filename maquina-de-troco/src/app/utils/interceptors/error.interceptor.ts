import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError } from "rxjs";
import { SnackBarService } from "../components/snackbar/service/snackbar.service";
import { ErrorInterface } from "../interfaces/error.interface";

export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private SnackBar: SnackBarService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        return next.handle(req).pipe(catchError((error) => {
            error.error as ErrorInterface;
            this.SnackBar.openSnackBar({
                type: "error",
                message: error.error.Message ?? "Erro sem tratamento, contate um administrador.",
                verticalPosition: "top",
                secondsDuration: 10,
                horizontalPosition: "center"
            });
            return error;
        }));
    }

}