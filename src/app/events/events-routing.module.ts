import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EventDashboardComponent } from './event-dashboard/event-dashboard.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate.guard';

const routes: Routes = [
    { path: 'events', component: EventDashboardComponent, canActivate: [AuthGuard] },
    { path: 'events/:id/edit', component: EventEditComponent, canDeactivate: [CanDeactivateGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {}