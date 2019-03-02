/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a
              href={this.docUrl("contribution-guide.html", this.props.language)}
            >
              Contributing
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://gitter.im/sidekikjs/community/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Gitter
            </a>
            <a href="https://discord.gg/utxE6Rr">Discord</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-show-count="true"
              aria-label="Star sidekik on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <a
          href={this.props.config.baseUrl}
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/logos/horizontal-white.svg`}
            alt="Sidekik"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright fbOpenSource">
          This project is licensed under the{" "}
          <a
            style={{ color: "white" }}
            href="https://github.com/inf3cti0n95/sidekik/blob/master/LICENSE"
          >
            MIT License
          </a>
          .
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
