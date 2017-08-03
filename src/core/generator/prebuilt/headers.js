import defaultTheme from '../themes';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

export function getHeaders(sectionSkeleton, page) {
  const headers = [h1,h2,h3];
  return headers.map(header => {
    const skeleton = cloneDeep(sectionSkeleton);
    const merged = merge({}, skeleton, header.blueprint);
    header.post && header.post(merged, page);
    return merged;
  })
}

const h1 = {
  blueprint: {
    name: 'Basic',
    style: {
      height: 12,
      verticalPosition: 2,
      horizontalPosition: 'left',
      parallax: true,
    },
    groups: {
      item: {
        name: 'KickerHeadingButton',
        style: {
          textTransform: "none"
        },
        elements: {
          kicker: {
            content: {text: 'Life Made Clearer'},
            style: { textTransform: 'none', fontSize: 6, fontFamily: 'Meddon', fontWeight: 1, },
            
          },
          heading: {
            content: {text: 'monocle'},
            style: { fontSize: 10, fontFamily: 'Source Sans Pro', fontWeight: 3 },
            
          },
        },
        groups: {
          buttonList: {
            name: 'ButtonList',
            elements: {
              buttons: {
                clones: [
                  {
                    content: {text: 'Create'}
                  },
                ]
              }
            }
          }
        },
      }
    }
  },
  post: (blueprint, page) => {
    if(!blueprint.color.backgroundImage) {
      blueprint.color = {
        backgroundImage: defaultTheme.backgroundImages[1].key,
        _backgroundImage: defaultTheme.backgroundImages[1].url,
        background: page.colorBlueprint.darkGray,
      }
    }
  }
};
const h2 = {
  blueprint: {
    name: 'BasicWide1_2',
    style: {
      height: 12,
    },
    elements: {
          image: {
            content: defaultTheme.images[0],
          }
        },
    groups: {
          tp: {
            name: 'KickerHeadingButton',
            elements: {
              kicker: {
                content: {text: 'Life Made Clearer'},
                style: { textTransform: 'none', fontSize: 5, fontFamily: 'Meddon', fontWeight: 1, },
              },
              heading: {
                content: {text: 'monocle'},
                style: { fontSize: 9, fontFamily: 'Source Sans Pro', fontWeight: 3 },
              },
            },
            groups: {
              buttonList: {
                name: 'ButtonList',
                elements: {
                  buttons: {
                    clones: [
                      {
                        content: {text: 'Create'}
                      },
                    ]
                  }
                }
              }
            },
          }
        },
  },
  post: (blueprint, page) => {
     if(blueprint.color.backgroundImage) {
      blueprint.color = {
         backgroundImage: {},
         _backgroundImage: {},
        background: page.colorBlueprint.lightGray,
      }
     }
  }
};
const h3 = {
  blueprint: {
    name: 'Basic',
    style: {
      height: 12,
      verticalPosition: 3,
      horizontalPosition: 'center',
      parallax: true,
      textAlign: 'center'
      
    },
    groups: {
      style: {
         textAlign: 'center',
         horizontalPosition: 'center',
      },
      item: {
        name: 'KickerHeadingButton',
        style: {
          textAlign: 'center'
        },
        elements: {
          kicker: {
            content: {text: 'Life Made Clearer'},
            style: { textTransform: 'none', fontSize: 6, fontFamily: 'Raleway', fontWeight: 1, },
            
          },
          heading: {
            content: {text: 'monocle'},
            style: {fontSize: 10, fontFamily: 'Raleway', fontWeight: 3 },
            
          },
        },
        groups: {
          buttonList: {
            name: 'ButtonList',
            style: {textAlign: 'center'},
            elements: {
              buttons: {
                clones: [
                  {
                    content: {text: 'Create'},
                    style: {textAlign: 'center'}
                  },
                ]
              }
            }
          }
        },
      }
    }
  },
 post: (blueprint, page) => {
    if(!blueprint.color.backgroundImage) {
      blueprint.color = {
        backgroundImage: defaultTheme.backgroundImages[0].key,
        _backgroundImage: defaultTheme.backgroundImages[0].url,
        background: page.colorBlueprint.darkGray,
      }
    }
    else {
      blueprint.color = {
        backgroundImage: defaultTheme.backgroundImages[0].key,
        _backgroundImage: defaultTheme.backgroundImages[0].url,
        background: page.colorBlueprint.darkGray,
    }
  }
}
}