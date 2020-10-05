import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSerieComponent } from './tv-serie.component';

describe('TvSerieComponent', () => {
  let component: TvSerieComponent;
  let fixture: ComponentFixture<TvSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
