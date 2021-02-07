import { ViewType } from '@enums/view-type.enum';
import { Views } from '@interfaces/views.state';
import { viewsMock } from '@mocks/views.mock';
import { ViewHelper } from './view.helper';

describe('ViewHelper', () => {
  it('Should get the updated arena view', () => {
    const actual: Views = ViewHelper.getUpdatedView(viewsMock, ViewType.ARENA, true);
    const expected: Views = {
      arena: {
        isShown: true
      },
      battleground: {
        isShown: true
      },
      modal: {
        isShown: false
      }
    };

    expect(actual).toEqual(expected);
  });

  it('Should get the updated battleground view', () => {
    const actual: Views = ViewHelper.getUpdatedView(viewsMock, ViewType.BATTLEGROUND, false);
    const expected: Views = {
      arena: {
        isShown: false
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

  it('Should get the updated modal view', () => {
    const actual: Views = ViewHelper.getUpdatedView(viewsMock, ViewType.MODAL, true);
    const expected: Views = {
      arena: {
        isShown: false
      },
      battleground: {
        isShown: true
      },
      modal: {
        isShown: true
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
