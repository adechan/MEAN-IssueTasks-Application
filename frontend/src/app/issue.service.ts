import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// Service class: created with "ng g s Issue"
export class IssueService {
  uri = 'http://localhost:4000';

  // we inject Http client here
  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };

    return this.http.post(`${this.uri}/issues/add`, issue)
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };

    return this.http.post(`${this.uri}/issues/update/${id}`, issue)
  }

  deleteIssue(id) {
    return this.http.delete(`${this.uri}/issues/delete/${id}`)
  }
}