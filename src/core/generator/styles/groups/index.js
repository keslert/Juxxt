import { range } from 'lodash';

export const sharedStyles = {
  'TalkingPoint': {
    textAlign: {
      default: 'center',
      options: ['center', 'right', 'left'],
    },
    maxWidth: {
      options: ['30em', '34em', '38em'],
      priority: 999, // Need a way to say this shouldn't change that often...
    }
  }
}