
import { NativeModules } from 'react-native';

interface NativeModulesInterface {
    BiometricModule: {
        scanner(
            title: string,
            subtitle: string,
            buttonText: string,
            onSuccess: () => void
        ): void;
    };
  }

export const { BiometricModule }: NativeModulesInterface  = NativeModules as any;
