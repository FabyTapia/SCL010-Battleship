import { TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[],
    imports: [AngularFireModule.initializeApp(environment.firebase),AngularFireAuthModule, AngularFirestoreModule],
  
    providers: [UserService ]
    
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
