import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appPipe'
})
export class AppPipe implements PipeTransform {

    transform(value: number) {
        return value.toString(2);
    }
}