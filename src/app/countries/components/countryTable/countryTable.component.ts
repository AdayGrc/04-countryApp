import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-countryTable',
  templateUrl: './countryTable.component.html',
  styles: [
    `img{
      width: 25px;
    }`
  ]
})
export class CountryTableComponent  {
  @Input()
  public countries: Country[] = [];
}
