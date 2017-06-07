import {Component} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
import {Electricity} from "../electricity";

@Component({
  selector: 'app-electricity-modal',
  templateUrl: './electricity-modal.component.html',
  styleUrls: ['./electricity-modal.component.css']
})
export class ElectricityModalComponent {
  selectedOption: string;

  constructor(public dialog: MdDialog) {
  }

  openDialog() {
    let dialogRef = this.dialog.open(ElectricityModalFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }


}

@Component({
  selector: 'app-electricity-modal-form',
  templateUrl: './electricity-modal-form.component.html'
})
export class ElectricityModalFormComponent {
  constructor(public dialogRef: MdDialogRef<ElectricityModalFormComponent>) {
  }

  model = new Electricity();
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
