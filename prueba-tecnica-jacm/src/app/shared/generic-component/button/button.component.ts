import { Component, Input } from '@angular/core';
import { ButtonTypeEnum } from '../../enum/button-type.enum';
import { ButtonColorEnum } from '../../enum/button-color.enum';

@Component({
  selector: 'ptj-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  /**
   * Diferent Angular material button types
   */
  @Input() ptjType: ButtonTypeEnum = ButtonTypeEnum.basic;

  /**
   * Diferent Angular material button colors
   */
  @Input() ptjColor: ButtonColorEnum = ButtonColorEnum.basic;

  /**
   * Button text
   */
  @Input() ptjText: string = '';

  buttonTypeEnum = ButtonTypeEnum;
}
