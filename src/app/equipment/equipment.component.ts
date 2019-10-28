import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: object[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];

  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  constructor() { }

  ngOnInit() { }

  addItem(equipmentLoaded: object): boolean {
    this.cargoHold.push(equipmentLoaded);
    this.cargoMass += equipmentLoaded["mass"];
    if (this.cargoMass <= 1800) {
      return true;
    };
    if (this.cargoHold.length === this.maxItems) {
      
    }
  }
}
