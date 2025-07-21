export default class HammerCursor {
  constructor() {
    // SVG молотка как data URI
    const hammerSVG =
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="14" y="2" width="4" height="20" fill="gray"/><rect x="10" y="0" width="12" height="6" fill="black"/><rect x="15" y="22" width="2" height="8" fill="saddlebrown"/></svg>';
    document.body.style.cursor = `url('${hammerSVG}') 8 8, auto`;
  }
} 