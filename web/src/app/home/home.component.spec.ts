import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../shared';
import { HomeComponent } from './home.component';
import { click } from '../../testing';

let fixture: ComponentFixture<HomeComponent>;
let comp: HomeComponent;

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        HomeComponent
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
  });

  it('should create HomeComponent', () => {
    expect(comp).toBeTruthy();
  });

  it('should render title as "Tap the button" in element with .title class', () => {
    let titleEle: HTMLElement = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleEle.textContent).toBe('Tap the button');
  });

  it('should display message in element with .message class', () => {
    let messageEle: HTMLElement = fixture.debugElement.query(By.css('.message')).nativeElement;
    fixture.detectChanges();
    expect(messageEle.textContent.length).toBeGreaterThan(0);
  });

  it('should decreament count by 1 on tap of button', () => {
    let btnEle: HTMLElement = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    let initialCount = comp.cvm.counter;
    click(btnEle);
    fixture.detectChanges();
    expect(comp.cvm.counter).toBe(initialCount - 1);
  });
});
