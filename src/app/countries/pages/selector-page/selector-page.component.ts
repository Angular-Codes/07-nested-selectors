import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region  : [ '', [ Validators.required ] ],
    country : [ '', [ Validators.required ] ]
  })

  regions   : string[] = [];
  countries : Country[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountriesService
  ){}

  ngOnInit(): void {
    this.regions = this.countryService.regions;

    // change region
    this.myForm.get('region')?.valueChanges
        .pipe( 
          tap( ( _ ) => {
            this.myForm.get('country')?.reset('')
          }),
          switchMap( region => this.countryService.getCountriesByRegion(region) )
        )
        .subscribe( countries => {
          this.countries = countries
        })

  }

  save(){
    console.log(this.myForm.value);
  }

}
