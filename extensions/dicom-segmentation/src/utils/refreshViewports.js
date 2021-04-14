export default function refreshViewports() {
  cornerstone.getEnabledElements().forEach(enabledElement => {
    // console.log('enabledElement',enabledElement)
    cornerstone.updateImage(enabledElement.element);
  });
}
