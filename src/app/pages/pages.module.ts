import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './manage/page/page.component';
import { PostsComponent } from './manage/posts/posts.component';
import { CustomerComponent } from './manage/customer/customer.component';
import { CommentComponent } from './manage/comment/comment.component';
import { UserComponent } from './manage/user/user.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PageComponent,
    PostsComponent,
    CustomerComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
