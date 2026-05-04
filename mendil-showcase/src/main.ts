import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';

// iOS Safari viewport height fix
function setVhVariable(): void {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

if (typeof window !== 'undefined') {
  setVhVariable();
  window.addEventListener('resize', setVhVariable);
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
