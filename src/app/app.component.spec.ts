import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap, Routes } from '@angular/router'
import { Location } from '@angular/common' 

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler'
import { StateUserService } from './core/services/state-user.service';
import { of } from 'rxjs';
import { UserApiService } from './core/services/user-api.service';
//import { routes } from './app-routing.module'
import { UserLoginComponent } from './core/user-login.component';
import { FormsModule } from '@angular/forms'

const userLoged = true
const stateUserServiceMock = {
  stateUserUpdated: () => of(userLoged),
  removeLoginFromLocalStorage: () => { }
}

const userApiServiceMock = {
  stateUserUpdated: () => of(userLoged),
}

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'iniciar-sesion', component: UserLoginComponent },
 
];

xdescribe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let stateUserService: StateUserService
  let userApiService: UserApiService
  let router: Router
  let location:Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        //RouterTestingModule
      ],
      declarations: [
        AppComponent, UserLoginComponent
      ],
      providers: [
        //StateUserService,
        UserApiService,
        {
          provide: StateUserService,
          useValue: stateUserServiceMock
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance

    location = fixture.debugElement.injector.get(Location)
    router = fixture.debugElement.injector.get(Router)
    router.initialNavigation() //to navigate to default path


    fixture.detectChanges()
    stateUserService = fixture.debugElement.injector.get(StateUserService)
    userApiService = fixture.debugElement.injector.get(UserApiService)
  })

  it('it should create app component', () => {
    expect(component).toBeTruthy()
  })

  it('toLogUser, check user logged after subsciption', () => {
 
    component.toLogUser()
    expect(component.userLoged).toBe(true)
  })

  it('isUserLoged, check if change value of state user to true', () => {
    const userResponse = {
      message: 'demo',
      user: {},
      user_profile: {},
      user_token: 'demo'
    }
    localStorage.setItem('data_user', JSON.stringify(userResponse))
    const spy = jest.spyOn(userApiService, 'checkUserInLocalStorage').mockImplementation(() => userResponse)

    //expect(component.userLoged).toBe(false) //---------> to check
    component.isUserLoged()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(component.userLoged).toBe(true)
  })

  it('closeSession, remove login from local storage', () => {
    component.userLoged = true
    const spy2 = jest.spyOn(stateUserService, 'removeLoginFromLocalStorage').mockImplementation( () => null)
    
    component.closeSession(false)
    expect(component.userLoged).toBe(false)
    expect(spy2).toHaveBeenCalledTimes(1)
    
    
    /* fixture.whenStable().then(() => {
      expect(location.path()).toBe('/inicar-session')
    }) */  //------------------> to check
    
    const userLogout = localStorage.getItem('data_user')
    //expect(userLogout).toBe(undefined) // --------------------> to check
  })




})

