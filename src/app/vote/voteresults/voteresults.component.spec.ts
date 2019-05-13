import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteresultsComponent } from './voteresults.component';

describe('VoteresultsComponent', () => {
  let component: VoteresultsComponent;
  let fixture: ComponentFixture<VoteresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
