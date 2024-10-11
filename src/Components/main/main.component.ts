import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SelectProjectComponent } from "../select-project/select-project.component";
import { Project } from '../Models/project.model';
import { ExcavationDataComponent } from "../excavation-data/excavation-data.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, SelectProjectComponent, ExcavationDataComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


}
