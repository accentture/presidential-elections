import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StateUserService } from './services/state-user.service';
import { UserApiService } from './services/user-api.service';

import { UserLoginComponent } from './user-login.component';

import { UserResponse } from './interfaces/user-response.interface';
import { of } from 'rxjs';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'iniciar-sesion', component: UserLoginComponent },
  { path: 'candidates', component: UserLoginComponent }
];

const userResponse = <UserResponse> {
  message:'Correct authentication',
  user:{},
  user_profile:{},
  user_token:''

}

const userApiServiceMock = {
  login:() => of(userResponse),
  saveUserLocalStorage:() => null
}
const stateUserServiceMock = {
  updateStateUser:() => null
}


describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let userApiService:UserApiService
  let stateUserService:StateUserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
  FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ 
        UserLoginComponent 
      ],
      providers:[
        {
          provide:UserApiService,
          useValue:userApiServiceMock
        },
        {
          provide:StateUserService,
          useValue:stateUserServiceMock
        }
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //userApiService = fixture.debugElement.injector.get(UserApiService)
    stateUserService = fixture.debugElement.injector.get(StateUserService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getDataForLogin, get params of form', () => {
    const testForm = <NgForm> {
      value:{},
      reset:function(){}
    }
    userApiService = fixture.debugElement.injector.get(UserApiService)
    
    const spyLogin = jest.spyOn(userApiService, 'login').mockReturnValueOnce( of(userResponse))

    const spySaveUserLocalStorage = jest.spyOn(userApiService, 'saveUserLocalStorage').mockImplementation(() => null)

    component.getDataForLogin(testForm)
    expect(spyLogin).toHaveBeenCalledTimes(1)
    expect(spySaveUserLocalStorage).toHaveBeenCalledTimes(1)
  })

  it('createLoginUser, a method of service should be called', () => {
    const spyUpdateStateUser = jest.spyOn(stateUserService, 'updateStateUser').mockImplementation(() => null)
    
    component.createLoginUser()
    expect(spyUpdateStateUser).toHaveBeenCalledTimes(1)
  })
});
