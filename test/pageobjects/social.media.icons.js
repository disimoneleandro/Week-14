class SocialMediaIcons {

    get btnTwitter() {
        return $('#page_wrapper > footer > ul > li.social_twitter > a')
    }

    get btnFacebook() {
        return $('#page_wrapper > footer > ul > li.social_facebook > a')
    }

    get btnLinkedIn() {
        return $('#page_wrapper > footer > ul > li.social_linkedin > a')
    }
}

export default new SocialMediaIcons();