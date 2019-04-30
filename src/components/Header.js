import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const enc = txt => encodeURIComponent(txt);
const shareMsg = "Explore 35k+ monologue jokes from 10+ years of late night.";
const shareUrl = "https://latenightlol.com";

export const Header = () => (
  <header className="mb2 flex">
    <div className="flex-auto">
      <h1 className="m0 h2 sm-h1">
        <a href="/" className="text-decoration-none">
          Late Night Comedy Library
        </a>
      </h1>
      <p className="m0 h4 sm-h3 line-height-1">Explore 10+ years of monologue jokes</p>
    </div>
    <div className="flex flex-column justify-end right-align xs-hide">
      <div className="line-height-1">
        <a
          href={`https://twitter.com/intent/tweet?text=${enc(shareMsg)}&url=${enc(shareUrl)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiTwitter className="ml1" />
        </a>
        <a
          href={`https://www.facebook.com/sharer.php?u=${enc(shareUrl)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiFacebook className="ml1" />
        </a>
      </div>
      <div>
        <Link to="/random">Get random joke</Link>
      </div>
    </div>
  </header>
);
