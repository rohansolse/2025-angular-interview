// src/main.server.ts
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';  // 👈 import *config*, not appConfig

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context); // 👈 pass context as 3rd arg

export default bootstrap;
