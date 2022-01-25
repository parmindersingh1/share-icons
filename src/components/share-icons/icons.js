import React from "react";
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  HatenaShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
  HatenaIcon,
} from "react-share";

export const allIcons = [
  { name: "facebook", icon: <FacebookIcon size={40} /> },
  { name: "facebook-messenger", icon: <FacebookMessengerIcon size={40} /> },
  { name: "twitter", icon: <TwitterIcon size={40} /> },
  { name: "telegram", icon: <TelegramIcon size={40} /> },
  { name: "whatsapp", icon: <WhatsappIcon size={40} /> },
  { name: "linkedin", icon: <LinkedinIcon size={40} /> },
  { name: "pinterest", icon: <PinterestIcon size={40} /> },
  { name: "vk", icon: <VKIcon size={40} /> },
  { name: "ok", icon: <OKIcon size={40} /> },
  { name: "reddit", icon: <RedditIcon size={40} /> },
  { name: "tumblr", icon: <TumblrIcon size={40} /> },
  { name: "live-journal", icon: <LivejournalIcon size={40} /> },
  { name: "mailru", icon: <MailruIcon size={40} /> },
  { name: "email", icon: <EmailIcon size={40} /> },
  { name: "viber", icon: <ViberIcon size={40} /> },
  { name: "workplace", icon: <WorkplaceIcon size={40} /> },
  { name: "line", icon: <LineIcon size={40} /> },
  { name: "weibo", icon: <WeiboIcon size={40} /> },
  { name: "pocket", icon: <PocketIcon size={40} /> },
  { name: "instapaper", icon: <InstapaperIcon size={40} /> },
  { name: "hatena", icon: <HatenaIcon size={40} /> },
];

export const getShareIcon = (name, shareUrl) => {
  if (name === "facebook") {
    return (
      <div className="Demo__some-network">
        <FacebookShareButton
          url={shareUrl}
          quote={name}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={60} />
        </FacebookShareButton>

        {/* <div>
          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          >
            {(count) => count}
          </FacebookShareCount>
        </div> */}
      </div>
    );
  } else if (name === "facebook-messenger") {
    return (
      <div className="Demo__some-network">
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="521270401588372"
          className="Demo__some-network__share-button"
        >
          <FacebookMessengerIcon size={60} />
        </FacebookMessengerShareButton>
      </div>
    );
  } else if (name === "twitter") {
    return (
      <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={60} />
        </TwitterShareButton>

        <div className="Demo__some-network__share-count">&nbsp;</div>
      </div>
    );
  } else if (name === "telegram") {
    return (
      <div className="Demo__some-network">
        <TelegramShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={60} />
        </TelegramShareButton>

        <div className="Demo__some-network__share-count">&nbsp;</div>
      </div>
    );
  } else if (name === "whatsapp") {
    return (
      <div className="Demo__some-network">
        <WhatsappShareButton
          url={shareUrl}
          title={name}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={60} />
        </WhatsappShareButton>

        <div className="Demo__some-network__share-count">&nbsp;</div>
      </div>
    );
  } else if (name === "linkedin") {
    return (
      <div className="Demo__some-network">
        <LinkedinShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon size={60} />
        </LinkedinShareButton>
      </div>
    );
  } else if (name === "pinterest") {
    return (
      <div className="Demo__some-network">
        <PinterestShareButton
          url={String(window.location)}
        //   media={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon size={60} />
        </PinterestShareButton>

        {/* <div>
          <PinterestShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          />
        </div> */}
      </div>
    );
  } else if (name === "vk") {
    return (
      <div className="Demo__some-network">
        <VKShareButton
          url={shareUrl}
        //   image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <VKIcon size={60} />
        </VKShareButton>

        <div>
          <VKShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          />
        </div>
      </div>
    );
  } else if (name === "ok") {
    return (
      <div className="Demo__some-network">
        <OKShareButton
          url={shareUrl}
        //   image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <OKIcon size={60} />
        </OKShareButton>

        <div>
          <OKShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          />
        </div>
      </div>
    );
  } else if (name === "reddit") {
    return (
      <div className="Demo__some-network">
        <RedditShareButton
          url={shareUrl}
          title={name}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={60} />
        </RedditShareButton>

        <div>
          <RedditShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          />
        </div>
      </div>
    );
  } else if (name === "tumblr") {
    return (
      <div className="Demo__some-network">
        <TumblrShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <TumblrIcon size={60} />
        </TumblrShareButton>

        {/* <div>
          <TumblrShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          />
        </div> */}
      </div>
    );
  } else if (name === "live-journal") {
    retrun(
      <div className="Demo__some-network">
        <LivejournalShareButton
          url={shareUrl}
          title={name}
          description={shareUrl}
          className="Demo__some-network__share-button"
        >
          <LivejournalIcon size={60} />
        </LivejournalShareButton>
      </div>
    );
  } else if (name === "mailru") {
    return (
      <div className="Demo__some-network">
        <MailruShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <MailruIcon size={60} />
        </MailruShareButton>
      </div>
    );
  } else if (name === "email") {
    return (
      <div className="Demo__some-network">
        <EmailShareButton
          url={shareUrl}
          subject={name}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={60} />
        </EmailShareButton>
      </div>
    );
  } else if (name === "viber") {
    return (
      <div className="Demo__some-network">
        <ViberShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <ViberIcon size={60} />
        </ViberShareButton>
      </div>
    );
  } else if (name === "workplace") {
    return (
      <div className="Demo__some-network">
        <WorkplaceShareButton
          url={shareUrl}
          quote={name}
          className="Demo__some-network__share-button"
        >
          <WorkplaceIcon size={60} />
        </WorkplaceShareButton>
      </div>
    );
  } else if (name === "line") {
    return (
      <div className="Demo__some-network">
        <LineShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <LineIcon size={60} />
        </LineShareButton>
      </div>
    );
  } else if (name === "weibo") {
    return (
      <div className="Demo__some-network">
        <WeiboShareButton
          url={shareUrl}
          title={name}
        //   image={`${String(window.location)}/${exampleImage}`}
          className="Demo__some-network__share-button"
        >
          <WeiboIcon size={60} />
        </WeiboShareButton>
      </div>
    );
  } else if (name === "pocket") {
    return (
      <div className="Demo__some-network">
        <PocketShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <PocketIcon size={60} />
        </PocketShareButton>
      </div>
    );
  } else if (name === "instapaper") {
    return (
      <div className="Demo__some-network">
        <InstapaperShareButton
          url={shareUrl}
          title={name}
          className="Demo__some-network__share-button"
        >
          <InstapaperIcon size={60} />
        </InstapaperShareButton>
      </div>
    );
  } else if (name === "hatena") {
    return (
      <div className="Demo__some-network">
        <HatenaShareButton
          url={shareUrl}
          title={name}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <HatenaIcon size={60} />
        </HatenaShareButton>

        {/* <div>
          <HatenaShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          />
        </div> */}
      </div>
    );
  }
};
