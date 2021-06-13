import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomManipulateService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public setBodyScroll(state: boolean): void {
    if (typeof window === 'undefined') return;
    if (state) {
      this.renderer.setStyle(document.body, 'overflow-y', 'auto');
    } else {
      this.renderer.setStyle(document.body, 'overflow-y', 'hidden');
    }
  }

  public restoreScroll(): void {
    if (typeof window === 'undefined') return;
    window.scrollTo(0, 0);
  }
}
