import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysiciansPage } from './physicians.page';

describe('PhysiciansPage', () => {
  let component: PhysiciansPage;
  let fixture: ComponentFixture<PhysiciansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysiciansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhysiciansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
