import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.scss"],
})
export class ServersComponent implements OnInit {
  allowButtonPress: boolean = false;
  serverCreationStation: string = "No Server Created";
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => (this.allowButtonPress = !this.allowButtonPress), 1000);
  }

  onCreateServer() {
    this.serverCreationStation = "Server was created";
  }
}
