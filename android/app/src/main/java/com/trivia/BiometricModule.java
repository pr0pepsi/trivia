package com.trivia;

import android.content.DialogInterface;
import android.hardware.biometrics.BiometricPrompt;
import android.os.Build;
import android.os.CancellationSignal;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BiometricModule extends ReactContextBaseJavaModule {
    BiometricModule(ReactApplicationContext context) { super(context);}

    @Override
    public String getName() {
        return "BiometricModule";
    }

    @RequiresApi(api = Build.VERSION_CODES.P)
    @ReactMethod
    public void scanner(String title, String subtitle, String buttonText, Callback onSuccess) {
        new BiometricPrompt.Builder(getReactApplicationContext())
                .setTitle(title)
                .setSubtitle(subtitle)
//                .setDescription("description")
                .setNegativeButton(buttonText, getReactApplicationContext().getMainExecutor(), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        // callback;
                    }
                })
                .build()
                .authenticate(
                        new CancellationSignal(),
                        getReactApplicationContext().getMainExecutor(),
                        new BiometricPrompt.AuthenticationCallback() {
                            @Override
                            public void onAuthenticationError(int errorCode, CharSequence errString) {
                                super.onAuthenticationError(errorCode, errString);
                                showMessage((String) errString);
                            }

                            @Override
                            public void onAuthenticationSucceeded(BiometricPrompt.AuthenticationResult result) {
                                super.onAuthenticationSucceeded(result);
                                showMessage("Login Success");
                                onSuccess.invoke();
                            }
                        });
    }

    @ReactMethod
    public void showMessage(String message) {
        Log.d("CalendarModule", "Message event called with message: " + message);
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }
}
