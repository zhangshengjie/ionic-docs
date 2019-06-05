import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'docs-footer-announcement',
  styleUrl: 'footer-announcement.css'
})
export class DocsFooterAnnouncement {
  private frameRequested = false;
  @State() hidden = false;
  private prevScroll = 0;
  @Listen('window:scroll')
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
      <footer class="footer-announcement"><strong>Ionic Meetup #12 Tokyo:</strong> 最新の情報を手に入れよう。2019/07/07(日)に開催。
        <a href="https://ionic-jp.connpass.com/event/133896/" target="_blank">参加する</a>
      </footer>
    );
  }
}
