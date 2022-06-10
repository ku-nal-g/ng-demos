import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed ,async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule,RouterModule,RouterTestingModule],
      providers: [BaseHttpService],
      declarations: [AppComponent,HomeComponent]
    })
    .compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'health-care'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('health-care');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('health-care app is running');
  });
});
