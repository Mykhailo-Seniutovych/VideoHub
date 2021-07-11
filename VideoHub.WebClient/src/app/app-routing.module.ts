import { AboutComponent } from "./pages/about/about.component";
import { AuthGuard } from "./authorization/auth.guard";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
    path: "about",
    component: AboutComponent,
}, {
    path: "videos",
    loadChildren: () => import("./pages/videos/videos.module")
        .then(m => m.VideosModule),
    canActivate: [AuthGuard],
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
