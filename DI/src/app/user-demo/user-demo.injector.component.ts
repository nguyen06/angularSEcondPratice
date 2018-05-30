import {
    Component,
    ReflectiveInjector
} from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
    selector: 'app-injector-demo',
    templateUrl: './user-demo.component.html',
    styleUrls: ['./user-demo.component.css']
})

export class UserDemoInjectorComponent {
    userName: string;
    userService: UserService;

    constructor() {
        const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);
        this.userService = injector.get(UserService);
    }

    signIn(): void {
        //when we sign in, set the user this mimics filling out a login form
        this.userService.setUser({
            name: `Ngoc Thinh Nguyen`
        });

        //now **read** username from the service
        this.userName = this.userService.getUser().name;
    }
}