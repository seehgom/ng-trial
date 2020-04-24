import { Component, OnInit } from '@angular/core';
const { log } = console;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-trial';
  ngOnInit(): void {}
}
