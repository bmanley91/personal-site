const white = '#FFFFFF';
const black = '#161617';
const gray = '#F8F8F9';

export interface SiteTheme {
    background: string;
    body: string;
}

const themeLight = {
    background: gray,
    body: black
};

const themeDark = {
    background: black,
    body: white
};

const theme = (mode: string): SiteTheme => (mode === 'dark' ? themeDark : themeLight);

export default theme;
