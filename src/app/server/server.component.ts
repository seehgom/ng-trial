import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
})
export class ServerComponent implements OnInit {
  allowButtonPress: false;
  name: string = "fast server";
  uptime(): number {
    return Math.random();
  }
  ip(): string {
    return "1.1.1.1";
  }
  ngOnInit() {}
}
