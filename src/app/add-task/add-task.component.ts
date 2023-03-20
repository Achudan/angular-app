import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

  // titleControl:FormControl =  new FormControl('', [Validators.required]);
  // descControl:FormControl =  new FormControl();
  // dateControl:FormControl =  new FormControl('', [Validators.required]);
  // detailsControl:FormControl =  new FormControl();

  addTaskFormGroup:FormGroup = new FormGroup(
    { title:new FormControl('', [Validators.required]),
      desc:new FormControl(),
      date:new FormControl('', [Validators.required]),
      details:new FormControl()}
  )

  addTaskForm!: FormGroup;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get titleControl(){
    return this.addTaskFormGroup.get('title') as FormControl;
  }

  get dateControl(){
    return this.addTaskFormGroup.get('date') as FormControl;
  }

  get descControl(){
    return this.addTaskFormGroup.get('desc') as FormControl;
  }

  get detailsControl(){
    return this.addTaskFormGroup.get('details') as FormControl;
  }

  onSubmit(){
    console.log(this.dateControl?.value);
  }

}
