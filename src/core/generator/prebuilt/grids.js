import merge from 'lodash/merge';
import defaultTheme from '../themes';
import cloneDeep from 'lodash/cloneDeep';

export function getGrids(sectionSkeleton, page) {
  const grids = [basic, noShadow, team];
  return grids.map(grid => {
    const skeleton = cloneDeep(sectionSkeleton);
    return grid.blueprint;
  })
}

const basic = {
  blueprint: {
    name: 'Basic',
    groups: {
      item: {
        name: 'Cards',
         groups: {
          card: {
             name: 'HeadingParagraph',
          }
         } 
      }
    }
  },
}

const noShadow = {
  blueprint: {
    name: 'Basic',
    groups: {
      item: {
        name: 'Cards',
        style: { dropShadow: 'none' },
        color: { background: '#transparent', borderColor: '#transparent' },
      }
    }
  }
}

const team = {
  blueprint: {
    name: 'Basic',
    groups: {
      item: {
        name: 'Cards',
         groups: {
          card: {
            name: 'ImageHeadingParagraph', 
            elements: {
              image: {
                style: {
                  borderRadius: '-pill',
                  aspectRatio: '1x1',
                }
              }
            },
            clones: [
              {
                elements: {
                  image: { 
                    content: {url:'https://images.pexels.com/photos/258641/pexels-photo-258641.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'} 
                  }
                },
                 groups: {
                  tp: {
                    name: 'HeadingParagraph',
                    elements: {
                      heading: {
                        content: {text: 'Name 1'},
                      },
                      paragraph: {
                        content: {text: 'Kesler is a great programmer and a brilliant innovator. I would work with Kesler again in a heart beat and fully expect to read about him in scientific journals and prestigious business magazines.'},
                      },
                    },
                  },
                 },
              },
              {
                elements: {
                  image: { 
                    content: {url:'https://images.pexels.com/photos/301284/pexels-photo-301284.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}  
                  }
                },
                 groups: {
                  tp: {
                    name: 'HeadingParagraph',
                    elements: {
                      heading: {
                        content: {text: 'Name 2'},
                      },
                      paragraph: {
                        content: {text: 'James Landay is a Professor of Computer Science at Stanford University, specializing in human-computer interaction (HCI). Previously, Dr. Landay was a Professor of Information Science at Cornell Tech in New York City and prior to that a Professor of Computer Science & Engineering at the University of Washington. '},
                      },
                    },
                  },
                 },
              },
              {
                elements: {
                  image: { 
                    content: {url:'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}
                  }
                },
                 groups: {
                  tp: {
                    name: 'HeadingParagraph',
                    elements: {
                      heading: {
                        content: {text: 'Name 3'},
                      },
                      paragraph: {
                        content: {text: 'Maneesh Agrawala is the Forest Baskett Professor of Computer Science and Director of the Brown Institute for Media Innovation at Stanford University. He was previously a Professor of Electrical Engineering and Computer Science at the University of California, Berkeley (2005 - 2015).'},
                      },
                    },
                  },
                 },
              },
              
            ]
          }
         }
      }
    }
  }
}
