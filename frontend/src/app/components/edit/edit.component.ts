import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 

import { Issue } from '../../issue.model'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  constructor(private issueService: IssueService, public fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group(
      {
        title: new FormControl('', Validators.required),
        responsible: new FormControl(''),
        description: new FormControl(''),
        severity: new FormControl(''),
        status: new FormControl('')
      });
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id)
      .subscribe((res) => {
        this.issue = res;
        this.updateForm.get('title').setValue(this.issue.title);
        this.updateForm.get('responsible').setValue(this.issue.responsible);
        this.updateForm.get('description').setValue(this.issue.description);
        this.updateForm.get('severity').setValue(this.issue.severity);
        this.updateForm.get('status').setValue(this.issue.status);
      });
    });
  }

  updateIssue() {
    var title = this.updateForm.get('title').value;
    var responsible = this.updateForm.get('responsible').value;
    var description = this.updateForm.get('description').value;
    var severity = this.updateForm.get('severity').value;
    var status = this.updateForm.get('status').value;

    this.issueService.updateIssue(this.id, title, responsible, description, severity, status)
    .subscribe(() => {
      this.router.navigate(['/list']);
    })
  }
}
