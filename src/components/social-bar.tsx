import SocialLink from "./social-link"

const SocialBar = () => {
    return (
        <div id='social-bar'>
            <SocialLink type='twitter' link='https://twitter.com/bmanley91'/>
            <SocialLink type='github' link='https://github.com/bmanley91'/>
            <SocialLink type='linkedin' link='https://www.linkedin.com/in/bmanley91/'/>
        </div>
    );
}

export default SocialBar;
