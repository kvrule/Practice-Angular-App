import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: "add",
        loadChildren: () => import("./media-item-form/new-item.module").then(m => m.NewItemModule)
    },
    { path: ":medium", component: MediaItemListComponent },
    { path: "", pathMatch: "full", redirectTo: "all" }
];

export const routing = RouterModule.forRoot(appRoutes);
