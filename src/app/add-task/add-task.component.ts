import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

  titleControl:FormControl =  new FormControl('', [Validators.required]);
  descControl:FormControl =  new FormControl();
  dateControl:FormControl =  new FormControl('', [Validators.required]);
  detailsControl:FormControl =  new FormControl();

  addTaskFormGroup:FormGroup = new FormGroup(
    { title:this.titleControl,
      desc:this.descControl,
      date:this.dateControl,
      details:this.detailsControl}
  )

  addTaskForm!: FormGroup;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get title(){
    return this.addTaskFormGroup.get('title');
  }

  get date(){
    return this.addTaskFormGroup.get('date');
  }

  get description(){
    return this.addTaskFormGroup.get('desc');
  }

  get details(){
    return this.addTaskFormGroup.get('details');
  }

  onSubmit(){
    console.log(this.date?.value);
  }

}
