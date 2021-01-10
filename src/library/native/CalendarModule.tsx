
import { NativeModules } from 'react-native';

interface NativeModulesInterface {
    CalendarModule: {
        createCalendarEvent(name: string, location: string, ): void;
        promiseEvent(name: string): Promise<any>
        callbackEvent(name: string, callback: (error: any,fullName: string) => void): void;
        showMessage(message: string): void;
    };
  }

export const { CalendarModule }: NativeModulesInterface  = NativeModules as any;
