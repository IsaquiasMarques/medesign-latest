import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkTemplateComponent } from './work.component';


describe('WorkComponent', () => {
  let component: WorkTemplateComponent;
  let fixture: ComponentFixture<WorkTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
