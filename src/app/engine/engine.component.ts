import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { EngineService } from "./services/engine.service";

@Component({
  selector: "app-engine",
  templateUrl: "./engine.component.html",
  styleUrls: ["./engine.component.scss"],
})
export class EngineComponent implements OnInit {
  // Gives our JavaScript a reference to the canvas DOM element.
  @ViewChild("renderCanvas", { static: true })
  public renderCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private engServ: EngineService) {}

  ngOnInit() {
    this.engServ.createScene(this.renderCanvas);
    this.engServ.animate();
  }
}
