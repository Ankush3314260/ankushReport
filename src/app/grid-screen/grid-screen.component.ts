import { Component } from '@angular/core';
import { GridServiceService } from '../grid-service.service';
import { Post } from '../models/post-model';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-grid-screen',
  templateUrl: './grid-screen.component.html',
  styleUrls: ['./grid-screen.component.css']
})
export class GridScreenComponent {
  myForm: FormGroup
  isSuccess: boolean = false
  formFlag: boolean = false
  popUpFlag: boolean = false
  postArray: Post[] = []
  constructor(private postService: GridServiceService, private builder: FormBuilder) {
    this.myForm = this.builder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  ngOnInit() {

    this.postService.getGridData().subscribe({
      next: (data: Post[]) => {
        this.postArray = data
      }
    })


  }

  openForm() {
    this.formFlag = !this.formFlag
  }

  onSubmit() {
    if (this.myForm.valid) {
      let payLoad: Post = this.myForm.value
      this.postService.postTheData(payLoad).subscribe({
        next: (data: Post) => {
          this.postArray.unshift(data)
          this.myForm.reset()
          this.openForm()
          this.popUpFlag = true
          this.isSuccess = true

          setTimeout(() => {
            this.popUpFlag = false
            this.isSuccess = false
          }, 2000)
        },
        error: () => {
          this.isSuccess = false
          this.popUpFlag = true

          setTimeout(() => {
            this.popUpFlag = false
          }, 2000)
        }
      })


    }

  }
}
