import { ComponentPortal, DomPortal, Portal, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { Component, ElementRef, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-portals',
  imports: [PortalModule],
  templateUrl: './portals.component.html',
  styleUrl: './portals.component.scss'
})
export class PortalsComponent {
private _viewContainerRef = inject(ViewContainerRef);

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown> | undefined;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement> | undefined;

  selectedPortal: Portal<any> | undefined;
  componentPortal: ComponentPortal<ComponentPortalExample> | undefined;
  templatePortal: TemplatePortal<any> | undefined;
  domPortal: DomPortal<any> | undefined;

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    if (this.templatePortalContent) {
      this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    }
    if (this.domPortalContent) {
      this.domPortal = new DomPortal(this.domPortalContent);
    }
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal',
})
export class ComponentPortalExample {}
