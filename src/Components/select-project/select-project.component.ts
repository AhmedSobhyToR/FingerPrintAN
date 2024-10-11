import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../Models/project.model';
import { mockProjects } from './mockProject';
import { RouterLink } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-select-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './select-project.component.html',
  styleUrl: './select-project.component.css'
})
export class SelectProjectComponent {
  projects:Project[] = mockProjects;
  constructor(private dataSer:DataService){

  }
  onSelectProject(project: Project){
    this.dataSer.setProject(project)
  }
 get getProject(){
    return this.dataSer.getProject
  }
  onCancel(){
    this.dataSer.setProject(undefined);
  }
}
