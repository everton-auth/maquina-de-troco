import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BootComponent } from './boot.component';

describe('BootComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BootComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BootComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'maquina-de-troco'`, () => {
    const fixture = TestBed.createComponent(BootComponent);
    const app = fixture.componentInstance;
    //expect(app).toEqual('maquina-de-troco');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BootComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('maquina-de-troco app is running!');
  });
});
