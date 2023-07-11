import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      declarations: [AppComponent],
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should add two numbers correctly', () => {
    component.num1 = 2;
    component.num2 = 3;
    component.add();
    expect(component.result).toEqual(5);
  });

  it('should subtract numbers correctly', () => {
    let result = component.subtract(2, 1);
    expect(result).toEqual(1);
  });
});
