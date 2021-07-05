import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scorecalculator';
  public form:  FormGroup; 
  public form2:  FormGroup; 
  show:boolean=false;
score1;
score2;
scoreg;
M;
n;

Mg;
Ri;
ri;

R;
B1;
B2;



  constructor(private fb: FormBuilder
    , public toastr: ToastrService,
   
    ) { }
  ngOnInit(): void {
    this.score1=0;
    this.form = this.fb.group({
      annne_naissance : [, [Validators.required]],
      moybac: [, [Validators.required]],
      moy1ere: [, [Validators.required]],
      rang1ere: [, [Validators.required]],
      effect1ere: [, [Validators.required]],
      moy2eme: [, [Validators.required]],
      rang2eme: [, [Validators.required]],
      effect2eme: [, [Validators.required]],
     

    });
    this.form2 = this.fb.group({
      moymatprinc: [, [Validators.required]],
      moyfreng: [, [Validators.required]]
   


    });

    
  }

  onSubmit(){
    if(this.form.invalid ||this.form2.invalid ){
      this.show=false;
      this.toastr.warning( 'veuillez-vous vérifier votre information'); 
    }
    else 
    {
     
      this.calculscore()

    }
  }
  ResetForm() {
    this.form.reset();
    this.form2.reset();
}


 calculscore() {
  this.score1=0;
  this.score2=0;
  this.scoreg=0;
  this.M=0;
  this.n=0;
  this.Mg=0;
  this.Ri=0;
  this.ri=0;
  this.R=0;
  this.B1=0;
  this.B2=0;
  if(this.form.value.annne_naissance=="1999" || this.form.value.annne_naissance=="2000")
  {
    this.B1=5;
  }

 if(this.form.value.moybac >=16 )
  this.B2=20;
  else if (this.form.value.moybac >=14 )
  this.B2=15;
  else if (this.form.value.moybac >=12 )
  this.B2=10;
  else if (this.form.value.moybac >=11 )
  this.B2=5;
  this.Mg=(this.form.value.moy1ere+this.form.value.moy2eme)/2;

  if(this.Mg >=15 )
  this.M=100;
  else if (this.form.value.moybac >10 )
  this.M=20*(this.Mg-10);

  
  this.ri=(this.form.value.rang1ere-1)/this.form.value.effect1ere;
  if(this.ri<=0.3)
  this.Ri=100-(700*this.ri)/3;

  this.ri=(this.form.value.rang2eme-1)/this.form.value.effect2eme;
  if(this.ri<=0.3)
  this.Ri+=100-(700*this.ri)/3;

 this.R=0.5*this.Ri
  this.score1= (this.M*0.3)+(0.7*this.R)+this.B1+this.B2;
  this.score2=this.form2.value.moymatprinc+this.form2.value.moyfreng;
  this.scoreg=this.score1+this.score2;
  this.show=true;
}

resetthings(){
  
  this.show=false;
  location.reload();

}
}



