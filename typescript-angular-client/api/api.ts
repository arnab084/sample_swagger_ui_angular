export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './mainController.service';
import { MainControllerService } from './mainController.service';
export const APIS = [BasicErrorControllerService, MainControllerService];
