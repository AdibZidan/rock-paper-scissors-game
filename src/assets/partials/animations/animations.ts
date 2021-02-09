import {
  animate, AnimationTriggerMetadata,
  style, transition, trigger
} from '@angular/animations';

export const popUp: AnimationTriggerMetadata = trigger('popUp', [
  transition(':enter', [
    style({ transform: 'scale(0.2)' }),
    animate('100ms', style({ transform: 'translateX(0)', opacity: 1 }))
  ])
]);

export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('{{ timing }}', style({ opacity: 1 }))
  ], { params: { timing: '2s' } })
]);

export const fadeOut: AnimationTriggerMetadata = trigger('fadeOut', [
  transition(':leave', [
    style({ opacity: 1 }),
    animate('250ms', style({ opacity: 0 }))
  ])
]);
