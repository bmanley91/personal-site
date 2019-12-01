import styled from '@emotion/styled';

export interface SocialLinkProps {
    type: string;
    link: string;
}

const Image = styled('img')`
    width: 50px;
    float: left;
    padding: 1rem;
`

const SocialLink: React.FunctionComponent<SocialLinkProps> = (props: SocialLinkProps) => {
    return (
        <div id={`social-link-${props.type}`}>
            <a href={props.link} target='_blank'>
                <Image className='img-responsive' src={`/images/${props.type}.png`} alt={`social-link-logo-${props.type}`} />
            </a>
        </div>
    );
};

export default SocialLink;
