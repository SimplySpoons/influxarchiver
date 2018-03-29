import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideDownAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideDownAnimation', [

    // end state styles for route container (host)
    state('*', style({
      // the view covers the whole screen with a semi tranparent background
      position: 'fixed',
      top: '60px',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      zIndex: 999,
      overflowY: 'auto',
    })),

    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({
        // start with the content positioned off the right of the screen,
        // -400% is required instead of -100% because the negative position adds to the width of the element
        top: '-100%',

        // start with background opacity set to 0 (invisible)
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),

      // animation and styles at end of transition
      animate('.5s ease-in-out', style({
        // transition the right position to 0 which slides the content into view
        top: '55px',

        // transition the background opacity to 0.8 to fade it in
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
      }))
    ]),

    // route 'leave' transition
    transition(':leave', [
      // animation and styles at end of transition
      animate('.5s ease-in-out', style({
        // transition the right position to -400% which slides the content out of view
        top: '-100%',

        // transition the background opacity to 0 to fade it out
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }))
    ])
  ]);
