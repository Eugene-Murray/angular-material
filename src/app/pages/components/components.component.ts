import {Component} from '@angular/core';
import { AutocompleteComponent } from "../../components/autocomplete/autocomplete.component";
import { BadgeComponent } from "../../components/badge/badge.component";
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonToggleComponent } from "../../components/button-toggle/button-toggle.component";
import { CardComponent } from "../../components/card/card.component";
import { CheckboxComponent } from "../../components/checkbox/checkbox.component";
import { ChipsComponent } from "../../components/chips/chips.component";
import { CoreComponent } from "../../components/core/core.component";
import { DatepickerComponent } from "../../components/datepicker/datepicker.component";
import { DialogComponent } from "../../components/dialog/dialog.component";
import { DividerComponent } from "../../components/divider/divider.component";
import { ExpansionPanelComponent } from "../../components/expansion-panel/expansion-panel.component";
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { GridListComponent } from "../../components/grid-list/grid-list.component";
import { IconComponent } from "../../components/icon/icon.component";
import { InputComponent } from "../../components/input/input.component";
import { ListComponent } from "../../components/list/list.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { PaginatorComponent } from "../../components/paginator/paginator.component";
import { ProgressBarComponent } from "../../components/progress-bar/progress-bar.component";
import { ProgressSpinnerComponent } from "../../components/progress-spinner/progress-spinner.component";
import { RadioButtonComponent } from "../../components/radio-button/radio-button.component";
import { RippleComponent } from "../../components/ripple/ripple.component";
import { SelectComponent } from "../../components/select/select.component";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { SlideToggleComponent } from "../../components/slide-toggle/slide-toggle.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { BottomSheetComponent } from "../../components/bottom-sheet/bottom-sheet.component";
import { SnackBarComponent } from "../../components/snack-bar/snack-bar.component";
import { SortHeaderComponent } from "../../components/sort-header/sort-header.component";
import { TableComponent } from "../../components/table/table.component";
import { StepperComponent } from "../../components/stepper/stepper.component";
import { TimePickerComponent } from "../../components/time-picker/time-picker.component";
import { ToolBarComponent } from "../../components/tool-bar/tool-bar.component";
import { TooltipComponent } from "../../components/tooltip/tooltip.component";
import { TreeComponent } from "../../components/tree/tree.component";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  imports: [AutocompleteComponent, BadgeComponent, ButtonComponent, ButtonToggleComponent, CardComponent, CheckboxComponent, ChipsComponent, CoreComponent, DatepickerComponent, DialogComponent, DividerComponent, ExpansionPanelComponent, FormFieldComponent, GridListComponent, IconComponent, InputComponent, ListComponent, MenuComponent, PaginatorComponent, ProgressBarComponent, ProgressSpinnerComponent, RadioButtonComponent, RippleComponent, SelectComponent, SidenavComponent, SlideToggleComponent, SliderComponent, BottomSheetComponent, SnackBarComponent, SortHeaderComponent, TableComponent, StepperComponent, TimePickerComponent, ToolBarComponent, TooltipComponent, TreeComponent]
})
export class ComponentsComponent {

}
