import { SocialLinkProps } from '../types/social-link-props';
import styled from '@emotion/styled';

const Image = styled('img')`
    text-align: center;
    width: 50px;
    float: left;
`

const SocialLink: React.SFC<SocialLinkProps> = (props: SocialLinkProps) => {
    return (
        <div id={`social-link-${props.type}`}>
            <a href={props.link} target='_blank'>
                <Image className='img-responsive' src={`/images/${props.type}.png`} alt={`social-link-logo-${props.type}`} />
            </a>
        </div>
    );
};

export default SocialLink;
