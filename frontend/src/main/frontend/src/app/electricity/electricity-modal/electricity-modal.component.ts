import {Component} from "@angular/core";
import {MdDialog, MdDialogRef} from "@angular/material";
import {Electricity} from "../electricity";
import {ElectricityService} from "../electricity.service";

@Component({
  selector: 'app-electricity-modal',
  templateUrl: './electricity-modal.component.html',
  styleUrls: ['./electricity-modal.component.css']
})
export class ElectricityModalComponent {
  electricityList: Electricity[];

  constructor(public dialog: MdDialog) {
  }

  openDialog() {
    let dialogRef = this.dialog.open(ElectricityModalFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.electricityList.push(result);
    });
  }


}

@Component({
  selector: 'app-electricity-modal-form',
  templateUrl: './electricity-modal-form.component.html'
})
export class ElectricityModalFormComponent {
  //electricity: Electricity;
  electricity = new Electricity();

  constructor(public dialogRef: MdDialogRef<ElectricityModalFormComponent>,
              private electricityService: ElectricityService) {
  }


  save(): void {
    this.electricityService.save(this.electricity)
      .then(result => this.dialogRef.close(result));
  }
}
