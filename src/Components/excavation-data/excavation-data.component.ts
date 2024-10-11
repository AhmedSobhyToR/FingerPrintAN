import { Component, Input, NgModule } from '@angular/core';
import { Project } from '../Models/project.model';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DataService } from '../Services/data.service';
import { Excavation } from '../Models/excavation.mode';
@Component({
  selector: 'app-excavation-data',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './excavation-data.component.html',
  styleUrl: './excavation-data.component.css'
})
export class ExcavationDataComponent {

  constructor(private dataSer:DataService){
    
  }

  excavationDataForm: FormGroup = new FormGroup({
    excavationMethod: new FormControl('', [Validators.required]),
    excavationType: new FormControl('', [Validators.required]),
    excavationDuration: new FormControl('', [Validators.required, 
      Validators.pattern('[0-9]{1,}'), Validators.min(1), Validators.max(100)]),
    excavationLocation: new FormGroup({
      street: new FormControl('', [Validators.required]),
      area: new FormControl('' , [Validators.required]),
      city: new FormControl('', [Validators.required]),
    }),
    excavationDescription: new FormControl('')
  })  

  ngOnInit(){
    // this.loadExcavationData();
    this.isFormFilled();
  }

  // Load enums into inputs in form
  loadExcavationData(){
    
  }

  // Check if form is already filled
  isFormFilled(){
    if(this.dataSer.getExcavation){
      this.excavationDataForm.patchValue(
        this.dataSer.getExcavationDetails
      )
    }
  }

  onCancel(){
    this.dataSer.setProject(undefined);
    this.excavationDataForm.reset();
    this.dataSer.resetExcavationDetails();


  }
  onSubmit(){
    if(!this.excavationDataForm.valid){
      return
    }
    this.dataSer.setExcavationDetails(this.excavationDataForm);
    // console.log(this.dataSer.getExcavationDetails);

  }

  get excavationMethod(){
    return this.excavationDataForm.get('excavationMethod')
  }
  get excavationType(){
    return this.excavationDataForm.get('excavationType')
  }
  get excavationDuration(){
    return this.excavationDataForm.get('excavationDuration')
  }
  get excavationLocation(){
    return this.excavationDataForm.get('excavationLocation')
  }
  get street(){
    return this.excavationLocation?.get('street')
  }
  get area(){
    return this.excavationLocation?.get('area')
  }
  get city(){
    return this.excavationLocation?.get('city')
  }
}

