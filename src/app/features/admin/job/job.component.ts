import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'app/API.service';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  loading = true;
  jobs;
  public cols = [
    { field: "code", header: "Code" },
    { field: "createdAt", header: "Created Date" },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  async ngOnInit() {
    const jobsObj = await this.api.ListJobs();
    console.log(jobsObj);
    this.jobs = jobsObj.items;
    this.loading = false;
  }

  public addEdit(form: any) {
    const id = form ? form.id : -1;
    this.router.navigate(["../add-edit-job", id], {
      relativeTo: this.route,
    });
  }
}
