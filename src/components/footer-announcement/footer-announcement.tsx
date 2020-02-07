import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'docs-footer-announcement',
  styleUrl: 'footer-announcement.css'
})
export class DocsFooterAnnouncement {
  private frameRequested = false;
  @State() hidden = false;
  private prevScroll = 0;
  @Listen('scroll', { target: 'window' })
  handleScroll() {
    if (!this.frameRequested) {
      requestAnimationFrame(() => {
        const { scrollY } = window;
        this.hidden = scrollY > 60 && scrollY > this.prevScroll;
        this.prevScroll = scrollY;
        this.frameRequested = false;
      });
      this.frameRequested = true;
    }
  }
  hostData() {
    return {
      class: { hidden: this.hidden }
    };
  }
  render() {
    return (
      <footer class="footer-announcement">
        <p>
          <strong>Ionic入門書の決定版！</strong>Ionicで作る モバイルアプリ制作入門[Angular版]
          <a href="https://amzn.to/2S7HwQt" target="_blank">
            Amazonで購入
            <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
          </a>
        </p>
      </footer>
    );
  }
}
