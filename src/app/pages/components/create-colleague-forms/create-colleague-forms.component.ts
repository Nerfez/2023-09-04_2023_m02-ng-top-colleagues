import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColleagueService } from 'src/services/colleague-service';

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent implements OnInit {

  colleagueForm!: FormGroup;
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder, private colleagueService: ColleagueService) { }

  ngOnInit(): void {
    this.urlRegex = /^[a-zA-Z0-9]+$/;
    this.colleagueForm = this.formBuilder.group({
      pseudo: ["", [Validators.required, Validators.pattern(this.urlRegex)]],
      first: ["", [Validators.required, Validators.pattern(this.urlRegex)]],
      last: ["", [Validators.required, Validators.pattern(this.urlRegex)]],
      photo: ["", [Validators.required]],
      score: [100, [Validators.required]]
    });
  }
  onSubmitForm() {
    this.colleagueService.addColleagueFromDB(this.colleagueForm.value).subscribe(new_col => {
      console.log("ajout col: ", new_col)
    });
  }
}
