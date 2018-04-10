import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
<% if (props.ui === 'ionic') { -%>
import { IonicModule } from 'ionic-angular';
<% } else if (props.ui === 'bootstrap') { -%>
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<% } else if (props.ui === 'material') { -%>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
<% } -%>

import { CoreModule } from '@app/core';
<% if (props.ui === 'material') { -%>
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
<% } -%>
import { LostPasswordComponent } from './lost-password.component';

describe('LostPasswordComponent', () => {
  let component: LostPasswordComponent;
  let fixture: ComponentFixture<LostPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
<% if (props.ui === 'ionic') { -%>
        IonicModule.forRoot(LostPasswordComponent),
<% } else if (props.ui === 'bootstrap') { -%>
        NgbModule.forRoot(),
<% } else if (props.ui === 'material') { -%>
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule,
<% } -%>
        RouterTestingModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        CoreModule
  ],
    declarations: [LostPasswordComponent]
  })
  .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});