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
        <img src="https://2019.kfug.jp/_nuxt/img/c3436b7.svg" alt="" />
        <p>
          <strong>FRONTEND CONFERENCE 2019:</strong><br />
          大阪で開催されるカンファレンスにコミュニティ出展します。2019年11月02日(土)。<br />
          <a href="https://2019.kfug.jp/group/ionic/" target="_blank">参加する</a>
        </p>
      </footer>
    );
  }
}
