export function getHeaderClass(): object {
  return {
    'w3-bar-item': true,
    'w3-button': true,
    'w3-padding': true,
    'w3-hide-small': true,
    'w3-selected': false,
    'small-screen-aggressive': false,
    'big-screen-aggressive': false,
  };
}

export function getLinkFromAssetName(asset_name: string): string {
  return 'https://github.com/PraderioM/LancasterGoClub/blob/master/src/assets/'+asset_name+'?raw=true'
}
