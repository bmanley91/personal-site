import { faTwitter, IconDefinition, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const lookupIcon = (name: string): IconDefinition => {
    switch(name) {
        case 'twitter':
            return faTwitter;
        case 'github':
            return faGithub;
        case 'linkedin':
            return faLinkedin;
        default:
            return faTwitter;
    }  
};
