/*eslint-disable  no-undef*/
module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=0',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit'
  ],
  'src/**/*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write']
};
