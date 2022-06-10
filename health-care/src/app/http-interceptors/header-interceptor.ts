import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "../services/base-http.service";


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {


    constructor(private service: BaseHttpService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url)

        const token = 'qwertyuiop';

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });

        return next.handle(req)
    }

}