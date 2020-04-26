import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output()
    navigate = new EventEmitter<string>();
    navigateTo(path: string){
        this.navigate.emit(path);
    }
}
