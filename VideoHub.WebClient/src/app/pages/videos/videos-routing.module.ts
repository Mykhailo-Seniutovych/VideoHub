import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideosListComponent } from "./videos-list/videos-list.component";

const routes: Routes = [{
    path: "",
    component: VideosListComponent,
}];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class VideosRoutingModule { }