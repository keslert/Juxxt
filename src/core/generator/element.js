import elements from '../../components/page/elements/meta';
import { randomItem } from '../utils';
import { getContent, clearCacheForElement } from './content';
import shortid from 'shortid';

export function generateElement(props) {
  const isSelected = false; // props.selectedUUIDs[props.element.uuid];
  
  const element = {
    uuid: shortid.generate(),
    familyID: shortid.generate(),
    isElement: true,
    userOverwrites: {},
    props: {},
    ...props.element,
    group: props.group,
  }

  const groupSelected = false; // props.selectedUUIDs[props.group.uuid];
  const sectionSelected = false; // props.selectedUUIDs[props.section.uuid];
  // if(props.modify.content && (isSelected || groupSelected || sectionSelected)) {
  //   clearCacheForElement(element);
  // }
  
  if(props.userOverwrites[element.uuid]) {
    element.userOverwrites = Object.assign({}, element.userOverwrites, props.userOverwrites[element.uuid]);
  }

  const elementTemplate = elements[element.name];
  element.props = {
    ...element.props,
    ...elementTemplate.defaultProps({palette: props.section.palette, globals: props.globals}, element.userOverwrites),
    ...element.userOverwrites,
  }  
  props.section.elements.push(element);

  return element;
}


function selectElement(props) {
  const name = randomItem(props.options);
  return name;
}