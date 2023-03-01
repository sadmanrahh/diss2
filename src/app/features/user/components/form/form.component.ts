import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Items } from '../../interfaces/user.interface';
import { orderBy } from '@firebase/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    public readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly item: Items
  ) {}

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      name: [this.item.name, [Validators.required]],
      type: [this.item.type, [Validators.required]],
      description: [this.item.description, [Validators.required]],
      height: [this.item.height, [Validators.required]],
      weight: [this.item.weight, [Validators.required]],
      imgUrl: [this.item.imgUrl, [Validators.required]],
    });
  }

  submit() {
    this.dialogRef.close({ ...this.item, ...this.form.value }), orderBy('type', 'asc');
  }
}