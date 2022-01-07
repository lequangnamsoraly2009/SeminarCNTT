import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer__description">
        <a href="/" aria-label="DEV Community Home" className="crayons-link">
          Family Tree Online
        </a>{" "}
        – A web browser that allows fast, safe and secure direct generation of
        family trees.
      </p>
      <div className="footer__description">
        <p className="footer-text">
          Built on{" "}
          <a
            href="https://www.forem.com"
            className="footer-link"
            rel="noopener"
          >
            Forem
          </a>{" "}
          — the{" "}
          <a
            href="https://dev.to/t/opensource"
            rel="noopener"
            className="footer-link"
          >
            open source
          </a>{" "}
          software that powers{" "}
          <a href="/" target="_blank" rel="noopener" className="footer-link">
            DEV
          </a>{" "}
          and other inclusive communities.
        </p>
        <p className="footer-text">
          Made with love and{" "}
          <a
            href="/t/rails"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            DJango
          </a>
          . Family Tree <span title="copyright">&copy;</span> 2016 -
          2021.
        </p>
        <div>
          <a
            href="/"
            rel="noopener"
            className="inline-block mt-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              aria-labelledby="aevz9bwvsrb8liu1ims1wq9lsp5rgisn"
              className="crayons-icon crayons-icon--default"
            >
              <title id="aevz9bwvsrb8liu1ims1wq9lsp5rgisn">Forem logo</title>
              <g clipPath="url(#clip0)" fill="#1AB3A6">
                <path d="M4.603 1.438a8.056 8.056 0 017.643 5.478 8.543 8.543 0 00-3.023 5.968H8.054C3.606 12.884 0 9.296 0 4.87V1.468a.03.03 0 01.03-.03h4.573zM23.97 6.515a.03.03 0 01.03.03v2.833c0 4.11-3.354 7.442-7.491 7.442h-2.881v5.726h-2.305V14.53l.022-1.145c.294-3.843 3.526-6.87 7.469-6.87h5.155z"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
