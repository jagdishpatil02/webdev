import { LayoutComponent } from '../layout/layout.component';

export const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            // { path: 'artists', loadChildren: './about-us/about-us.module#AboutUsModule' },
        ]
    }
];
