import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';


@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = State;
  public comment: string;
  public form: FormGroup;
  @Input() init = new Prestation();
  @Output() nItem: EventEmitter<{item: Prestation}> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.generateForm();
  }

  private generateForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, Validators.compose([Validators.required , Validators.minLength(3)])],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tauxTva: [this.init.tauxTva],
      state: [this.init.state],
      comment: [this.init.comment],
    });
  }
  public onSubmit() {
    this.nItem.emit({ item: this.form.value});
  }
}
