import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstructionComponent } from './reconstruction.component';

describe('ReconstructionComponent', () => {
  let component: ReconstructionComponent;
  let fixture: ComponentFixture<ReconstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
