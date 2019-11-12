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
          <strong>Ionic Meetup</strong>Ionicについての知識を共有するためのイベント。初参加・初登壇歓迎。
          <a href="https://ionic-jp.connpass.com/event/155092/" target="_blank">12/7 兵庫</a>
          <a href="https://ionic-jp.connpass.com/event/155536/" target="_blank">12/14 東京</a>
        </p>
      </footer>
    );
  }
}
