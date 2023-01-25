import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtils } from 'app/@shared/utils/date-utils';
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
  projectCodes = [];
  public cols = [
    { field: "location", header: "Code" },
    { field: "code", header: "Name" },
    { field: "startDate", header: "Start Date" },
    { field: "endDate", header: "End Date" },
    { field: "createdAt", header: "Date Created" },
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
    this.projectCodes = this.jobs.map((job) => job.location);
    console.log(this.projectCodes);
    this.loading = false;
  }

  public addEdit(form: any) {
    const id = form ? form.id : -1;
    let projectCode;
    if (id === -1) {
      projectCode = DateUtils.generateProjectCode();
      while (this.projectCodes.includes(projectCode)) {
        projectCode = DateUtils.generateProjectCode();
      }
    }
    this.router.navigate(["../add-edit-job", id, { projectCode }], {
      relativeTo: this.route,
    });
  }
}
