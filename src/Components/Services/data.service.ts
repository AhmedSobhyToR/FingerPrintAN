import { Injectable } from '@angular/core';
import { Project } from '../Models/project.model';
import { FormGroup } from '@angular/forms';
import { Excavation } from '../Models/excavation.mode';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user!:User;
  selectedProject?:Project;
  excavationDetails!:Excavation;
  excavationDataForm!: FormGroup;
 
  setUser(){
    this.user={
      name:"Ahmed Sobhy",
      phone:"0100000000",
      paymentMethod:"Credit Card",
      balance: 1500
    }
  }
  get getUser(){
    return this.user;
  }

  setProject(prj:Project|undefined){
    this.selectedProject = prj;
  }
  get getProject(){
    return this.selectedProject;
  }

  get getExcavation(){
    return this.excavationDataForm;
  }

  setExcavationDetails(excavationDataForm: FormGroup){
    this.excavationDataForm = excavationDataForm;
    this.excavationDetails={
      excavationMethod:this.getExcavation.value['excavationMethod'],
      excavationType: this.getExcavation.value['excavationType'],
      excavationDuration: this.getExcavation.value['excavationDuration'],
      excavationLocation:{
        street: this.getExcavation.get('excavationLocation')?.value['street'],
        area: this.getExcavation.get('excavationLocation')?.value['area'],
        city: this.getExcavation.get('excavationLocation')?.value['city']
      },
      excavationDescription:this.getExcavation.value['excavationDescription'],
      price: Math.ceil(Math.random()* 1700)
    }
  }

  get getExcavationDetails(){
    return this.excavationDetails;
  }

  resetExcavationDetails(){
    this.excavationDataForm.reset();
    this.excavationDetails = {} as Excavation;
  }

  setPermit(){

  }
  get getPermit(){
    return
  }
} 
