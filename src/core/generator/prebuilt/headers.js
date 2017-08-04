import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

export function getHeaders(sectionSkeleton, page) {
  const headers = [h1,h2,h3,h4];
  return headers.map(header => {
    const skeleton = cloneDeep(sectionSkeleton);
    const merged = merge({}, skeleton, header.blueprint(page));
    header.post && header.post(merged, page);
    return merged;
  })
}

const h1 = {
  blueprint: page => ({
    name: 'Basic',
    style: {
      height: 12,
      verticalPosition: 2,
      horizontalPosition: 'left',
      parallax: true,
      textAlign: 'left'
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
            style: { textTransform: 'none', fontSize: 4, fontFamily: 'Open Sans', fontWeight: 1, },
            
          },
          heading: {
            content: {text: 'monocle'},
            style: { fontSize: 9, fontFamily: 'Open Sans', fontWeight: 3 },
            
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
  }),
  post: (blueprint, page) => {
    if(!blueprint.color.backgroundImage) {
      blueprint.color = {
        backgroundImage: page.backgroundImages[1].url,
        background: page.colorBlueprint.darkGray,
      }
    }
  }
};
const h2 = {
  blueprint: page => ({
    name: 'BasicWide1_2',
    style: {
      height: 10,
      textAlign: 'left',
      padding: 5,
    },
    
    elements: {
      image: {
        content: page.images[0],
      }
    },
    groups: {
      tp: {
        name: 'KickerHeadingButton',
        style: {
            textAlign: 'left',
            padding: 5,
          },
        elements: {
          kicker: {
            content: {text: 'Life Made Clearer'},
            style: { textTransform: 'none', fontSize: 5, fontFamily: 'Open Sans', fontWeight: 1, },
          },
          heading: {
            content: {text: 'monocle'},
            style: { fontSize: 9, fontFamily: 'Open Sans', fontWeight: 3 },
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
  }),
  post: (blueprint, page) => {
     if(blueprint.color.backgroundImage) {
      blueprint.color = {
        background: page.colorBlueprint.lightGray,
      }
     }
  }
};
const h3 = {
  blueprint: page => ({
    name: 'Basic',
    style: {
      height: 10,
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
            style: { textTransform: 'none', fontSize: 6, fontFamily: 'Open Sans', fontWeight: 1, },
            
          },
          heading: {
            content: {text: 'monocle'},
            style: {fontSize: 10, fontFamily: 'Open Sans', fontWeight: 3 },
            
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
  }),
 post: (blueprint, page) => {
    if(!blueprint.color.backgroundImage) {
      blueprint.color = {
        backgroundImage: page.backgroundImages[0].url,
        background: page.colorBlueprint.darkGray,
      }
    }
    else {
      blueprint.color = {
        backgroundImage: page.backgroundImages[0].url,
        background: page.colorBlueprint.darkGray,
    }
  }
}
};
const h4 = {
  blueprint: page => ({
    name: 'Basic',
    style: {
      height: 2,
      verticalPosition: 2,
      horizontalPosition: 'left',
      parallax: true,
    },
    groups: {
      item: {
        name: 'ImageHeadingParagraph',
        style: {
          textTransform: "none",
          textAlign: {_default:"inherit", options: ["inherit","center","left","right"]},
        },    
        elements: {
        image: { 
          name: 'BasicImage' ,
          content: page.images[0],
          style: {
            marginBottom: 4,
          }
        },

        },
        groups: {
          tp: {
            options: ['HeadingParagraph'],
            style: {
              textAlign: 'center',
            }
          }
        },          
      }
    }
  }),
  post: (blueprint, page) => {
     if(blueprint.color.backgroundImage) {
      blueprint.color = {
        background: '#ffffff',
        backgroundImage: undefined,
      }
     }
  }
};