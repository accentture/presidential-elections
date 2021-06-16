import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogoutComponent } from './user-logout.component';

xdescribe('UserLogoutComponent', () => {
  let component: UserLogoutComponent;
  let fixture: ComponentFixture<UserLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogoutComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('sendLogout, it should emit value', () => {
    const emitSpy = jest.spyOn(component.stateLogin, 'emit')
    const spy = jest.spyOn(component, 'showCloseSesionButton')

    component.sendLogout()
    expect(emitSpy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('showCloseSesionButton, it should add showButton class', () => {
    //component.showbuttonAdded = false
    component.showCloseSesionButton()
    expect(component.closeSessionButton?.nativeElement.classList.contains('showButton')).toBe(true)
    expect(component.showbuttonAdded).toBe(true)

  })

  it('showCloseSesionButton, it should remove showButton class', () => {
    component.showbuttonAdded = true
    component.showCloseSesionButton()
    expect(component.closeSessionButton?.nativeElement.classList.contains('showButton')).toBe(false)
    expect(component.showbuttonAdded).toBe(false)

  })

});
