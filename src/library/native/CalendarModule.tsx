/**
* This exposes the native CalendarModule module as a JS module. This has a
* function 'createCalendarEvent' which takes the following parameters:

* 1. String name: A string representing the name of the event
* 2. String location: A string representing the location of the event
*/
import { NativeModules } from 'react-native';

interface NativeModulesInterface {
    CalendarModule: {
        createCalendarEvent(name: string, location: string, ): void;
        promiseEvent(name: string): Promise<any>
        callbackEvent(name: string, callback: (error: any,fullName: string) => void): void;
        showMessage(message: string): void;

        scanner(callback: () => void): void;
    };
  }

export const { CalendarModule }: NativeModulesInterface  = NativeModules as any;
