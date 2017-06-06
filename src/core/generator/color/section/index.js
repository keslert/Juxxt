export function colorSection(section, sections) {
  const match = find(sections, s => s.id === section.id) || {color: {background: 'light'}};
  section.color = match.color;
}