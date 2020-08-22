import { ContentCardProps } from '../../components/content-card';

export const myStuff: ContentCardProps[] = [
    {
        title: 'Headwind Golf',
        body: 'An iOS app that lets golfers know how the wind will affect their game. The app is built using SwiftUI and pulls data from the OpenWeather API.',
        linkText: 'Check it out on the App Store!',
        linkURL: 'https://apps.apple.com/app/id1527783063'
    }, {
        title: 'Express i18n Made Easy',
        body: 'A dev.to article I wrote outlining how to internationalize an Express API.',
        linkText: 'Express i18n Made Easy',
        linkURL: 'https://dev.to/bmanley91/express-i18n-made-easy-2d2o'
    }, {
        title: 'Gradle Cucumber JVM Plugin',
        body: 'A Gradle plugin that allows for the execution of Cucumber tests. I added an option that the user can specify to customize their report format. This plugin was maintained by the CommerceHub OSS team, but has since stopped being maintained.',
        linkText: 'gradle-cucumer-jvm-plugin',
        linkURL: 'https://github.com/commercehub-oss/gradle-cucumber-jvm-plugin'
    },{
        title: 'This Site',
        body: 'The website that you\'re looking at right now! It uses NextJs, React, and Emotion. It\'s hosted and deployed with Netlify.',
        linkText: 'Source Code',
        linkURL: 'https://github.com/bmanley91/personal-site'
    }
];

// Retired
// {
//     title: 'Gatling Gradle Plugin',
//     body: 'I created and was the original maintainer for this Gradle plugin that allows for the execution of Gatling performance tests. In addition to executing Gatling tests, it can also report metrics to Graphite and reference these metrics to check for degredation of performance between test runs.',
//     linkText: 'gatling-gradle-plugin',
//     linkURL: 'https://github.com/commercehub-oss/gatling-gradle-plugin'
// }, 