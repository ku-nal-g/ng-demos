import { ComponentFixture, TestBed,async} from '@angular/core/testing';
 import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { BaseHttpService } from 'src/app/services/base-http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

// custom test case
// fdescribe('Unit testing using jasmine', () => {
//   it('First Test Script', () =>{
//     var tax = 10 * 2;
//     expect(tax).toBe(20);
//   });
// });

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule,RouterTestingModule],
      providers: [BaseHttpService],
      declarations: [HomeComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
