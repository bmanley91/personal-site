import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { lookupIcon } from '../utils/icon-lookup';

export interface SocialLinkProps {
    type: string;
    link: string;
}

const SocialLinkDiv = styled('div')`
    width: 50px;
    float: left;
    padding: 1rem;
    font-size: 50px;
`

const SocialLinkIcon = styled('a')`
    color: white;
`

const SocialLink: React.FunctionComponent<SocialLinkProps> = (props: SocialLinkProps) => {
    return (
        <SocialLinkDiv>
            <SocialLinkIcon href={props.link} target='_blank'>
                <FontAwesomeIcon icon={lookupIcon(props.type)} />
            </SocialLinkIcon>
        </SocialLinkDiv>
    );
};

export default SocialLink;
