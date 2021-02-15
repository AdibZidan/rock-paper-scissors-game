import { ViewType } from '@enums/view-type.enum';
import { Views } from '@interfaces/views.state';
import { viewsMock } from '@mocks/views.mock';
import { ViewHelper } from './view.helper';

describe('ViewHelper', () => {
  it('Should get the updated arena view', () => {
    const actual: Views = ViewHelper.getUpdatedView(viewsMock, ViewType.ARENA, true);
    const expected: Views = {
      modeSelector: {
        isShown: true
      },
      original: {
        isShown: false
      },
      bonus: {
        isShown: false
      },
      arena: {
        isShown: true
      },
      battleground: {
        isShown: false
      },
      modal: {
        isShown: false
      }
    };

    expect(actual).toEqual(expected);
  });

  it('Should return the default view if given an invalid property name', () => {
    const actual: Views = ViewHelper.getUpdatedView(viewsMock, 'test' as ViewType, true);
    const expected: Views = viewsMock;

    expect(actual).toEqual(expected);
  });
});
