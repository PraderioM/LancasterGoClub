export function getHeaderClass(): object {
  return {
    'w3-bar-item': true,
    'w3-button': true,
    'w3-padding': true,
    'w3-hide-small': true,
    'w3-selected': false,
  };
}

export function getImageLinkFromId(id: string): string {
  // return 'https://drive.google.com/thumbnail?id=' + id;
  return 'https://github.com/PraderioM/LancasterGoClub/blob/master/src/assets/'+id+'?raw=true'
}
