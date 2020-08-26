import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, public fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group(
    {
      title: new FormControl('', Validators.required),
      responsible: new FormControl(''),
      description: new FormControl(''),
      severity: new FormControl('')
    });
  }

  addIssue() {
  
    var title = this.createForm.get('title').value;
    var responsible = this.createForm.get('responsible').value;
    var description = this.createForm.get('description').value;
    var severity = this.createForm.get('severity').value;

    this.issueService.addIssue(title, responsible, description, severity)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });

  }

  ngOnInit(): void {
  }

}
