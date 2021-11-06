import { UserComponent } from './manage/user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from "@angular/router";
import { PageComponent } from './manage/page/page.component';
import { PostsComponent } from './manage/posts/posts.component';
import { CustomerComponent } from './manage/customer/customer.component';
import { CommentComponent } from './manage/comment/comment.component';

export const routes: Routes = [
    { path: '', redirectTo: "dashboard", pathMatch: "full" },
    { path: 'dashboard', component: DashboardComponent, },
    { path: 'page', component: PageComponent, },
    { path: 'posts', component: PostsComponent, },
    { path: 'customer', component: CustomerComponent, },
    { path: 'comment', component: CommentComponent, },
    { path: 'user', component: UserComponent, },
];