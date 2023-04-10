import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService } from "app/API.service";
import { MessageService } from "primeng/api";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.scss"],
})
export class LocationComponent implements OnInit, OnDestroy {
  existingLocations;
  form: FormGroup;
  deletedLocations = [];
  loading = true;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private api: APIService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      locations: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.fetchLocations();
  }

  public isInvalid(index: number) {
    return (
      this.locations.at(index).invalid &&
      (this.locations.at(index).dirty || this.locations.at(index).touched)
    );
  }

  async fetchLocations() {
    const allLocations = await this.api.ListLocations();
    this.loading = false;
    this.existingLocations = allLocations.items.filter(
      (location) => !location._deleted
    );
    this.existingLocations.sort((l1, l2) => l1.name.localeCompare(l2.name));

    this.form.setControl(
      "locations",
      this.fb.array(
        this.existingLocations.map((q) =>
          this.fb.group({
            id: [q.id],
            _version: q._version,
            name: [q.name, Validators.required],
          })
        )
      )
    );
  }

  public get locations() {
    return this.form.controls["locations"] as FormArray;
  }

  addLocation() {
    const locationForm = this.fb.group({
      name: [null, Validators.required],
    });

    this.locations.push(locationForm);
  }

  deleteLocation(index: number) {
    if (this.locations.at(index).value.id) {
      this.deletedLocations.push(this.locations.at(index).value);
    }
    this.locations.removeAt(index);
  }

  async save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      const request = [];

      for (let i = 0; i < this.locations.length; i++) {
        const rawValue = (this.locations.at(i) as FormGroup).getRawValue();
        if (rawValue.id) {
          request.push(
            this.api.UpdateLocation({
              id: rawValue.id,
              _version: rawValue._version,
              name: rawValue.name,
            })
          );
        } else {
          request.push(
            this.api.CreateLocation({
              name: rawValue.name,
            })
          );
        }
      }

      await Promise.all(request);
      await Promise.all(
        this.deletedLocations.map((l) =>
          this.api.DeleteLocation({ id: l.id, _version: l._version })
        )
      );
      this.loading = false;

      this.messageService.add({
        key: "tst",
        severity: "success",
        summary: "Success",
        detail: "Location updated.",
      });

      this.deletedLocations = [];
    }
  }

  ngOnDestroy(): void {}
}
