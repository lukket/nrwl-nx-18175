import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text with word "bar"', () => {
    const barTextElement = fixture.debugElement.query(
      By.css('[data-test="barText"')
    ).nativeElement;
    const barTextInnerHtml =
      barTextElement instanceof HTMLElement
        ? barTextElement.innerHTML
        : undefined;

    expect(barTextInnerHtml).toContain('bar');
  });
});
