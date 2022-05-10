import styled from '@emotion/styled';
import { SiteTheme } from '../resources/theme';

interface ContentWrapperProps {
    theme: SiteTheme
}

const ContentWrapper = styled('div')`
    margin-right: 5%;
    margin-left: 5%;
    color: ${(props: ContentWrapperProps) => props.theme.body};
    a:link, a:visited {
        color: ${(props: ContentWrapperProps) => props.theme.body};
    }
`;

export default ContentWrapper;
