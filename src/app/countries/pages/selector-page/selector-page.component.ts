import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';
import { CountryDetail } from '../../interfaces/country-detail.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region  : [ '', [ Validators.required ] ],
    country : [ '', [ Validators.required ] ],
    border  : [ '', [ Validators.required ] ],
  })

  regions   : string[] = [];
  countries : Country[] = [];
  borders   : string[] = [];

  loading: boolean = false;

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
            this.loading = true
            this.myForm.get('country')?.reset('')
          }),
          switchMap( region => this.countryService.getCountriesByRegion(region) )
        )
        .subscribe( countries => {
          this.countries = countries
          this.loading = false
        })

    // change country
    this.myForm.get('country')?.valueChanges
        .pipe( 
          tap( ( _ ) => {
            this.loading = true
            this.myForm.get('border')?.reset('')
          }),
          switchMap( country => this.countryService.getCountryByCode(country) ) 
        )
        .subscribe( countryDetail => {
          this.borders = countryDetail[0].borders
          this.loading = false
        })

  }

  save(){
    console.log(this.myForm.value);
  }

}
