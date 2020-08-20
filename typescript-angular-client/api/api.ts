export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [BasicErrorControllerService, UserControllerService];
