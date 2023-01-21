import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({name: 'searchText'}) 
export class FilterPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        return value.slice(0, length);
    }
}