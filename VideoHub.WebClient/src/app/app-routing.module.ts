import { AuthGuard } from "./authorization/auth-guard";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
    path: "home",
    component: HomeComponent,
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
