import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubFormComponent } from './git-hub-form.component';

describe('GitHubFormComponent', () => {
  let component: GitHubFormComponent;
  let fixture: ComponentFixture<GitHubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
