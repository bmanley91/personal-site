import styled from '@emotion/styled';
import { SiteTheme } from '../resources/theme';

interface SiteWrapperProps {
    theme: SiteTheme
}

const SiteWrapper = styled('div')`
    position: relative;
    min-height: 100vh;
    background: ${(props: SiteWrapperProps) => props.theme.background};
`;

export default SiteWrapper;
