import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: '', component: StartScreenComponent},
    { path: 'game', component: GameComponent}
];
