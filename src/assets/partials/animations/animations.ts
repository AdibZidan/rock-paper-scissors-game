import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const popUp: AnimationTriggerMetadata = trigger('popUp', [
  transition(':enter', [
    style({ transform: 'scale(0.2)' }),
    animate('100ms', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('2s', style({ opacity: 1 }))
  ])
]);
