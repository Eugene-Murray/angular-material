import { Component } from '@angular/core';
import { AccessibilityComponent } from "../../components/_cdk/accessibility/accessibility.component";
import { AccordionComponent } from "../../components/_cdk/accordion/accordion.component";
import { BidirectionalityComponent } from "../../components/_cdk/bidirectionality/bidirectionality.component";
import { ClipboardComponent } from "../../components/_cdk/clipboard/clipboard.component";
import { CoercionComponent } from "../../components/_cdk/coercion/coercion.component";
import { CollectionsComponent } from "../../components/_cdk/collections/collections.component";
import { ComponentTestHarnessesComponent } from "../../components/_cdk/component-test-harnesses/component-test-harnesses.component";
import { DataTableComponent } from "../../components/_cdk/data-table/data-table.component";
import { DialogComponent } from "../../components/_cdk/dialog/dialog.component";
import { DragDropComponent } from "../../components/_cdk/drag-drop/drag-drop.component";
import { LayoutComponent } from "../../components/_cdk/layout/layout.component";
import { ListboxComponent } from "../../components/_cdk/listbox/listbox.component";
import { MenuComponent } from "../../components/_cdk/menu/menu.component";
import { ObserversComponent } from "../../components/_cdk/observers/observers.component";
import { OverlayComponent } from "../../components/_cdk/overlay/overlay.component";
import { PlatformComponent } from "../../components/_cdk/platform/platform.component";
import { PortalsComponent } from "../../components/_cdk/portals/portals.component";
import { ScrollingComponent } from "../../components/_cdk/scrolling/scrolling.component";
import { StepperComponent } from "../../components/_cdk/stepper/stepper.component";
import { TextFieldComponent } from "../../components/_cdk/text-field/text-field.component";
import { TreeComponent } from "../../components/_cdk/tree/tree.component";

@Component({
  selector: 'app-cdk',
  imports: [AccessibilityComponent, AccordionComponent, BidirectionalityComponent, ClipboardComponent, CoercionComponent, CollectionsComponent, ComponentTestHarnessesComponent, DataTableComponent, DialogComponent, DragDropComponent, LayoutComponent, ListboxComponent, MenuComponent, ObserversComponent, OverlayComponent, PlatformComponent, PortalsComponent, ScrollingComponent, StepperComponent, TextFieldComponent, TreeComponent],
  templateUrl: './cdk.component.html',
  styleUrl: './cdk.component.scss'
})
export class CdkComponent {

}
