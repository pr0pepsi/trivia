package com.trivia;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.content.DialogInterface;
import android.hardware.biometrics.BiometricPrompt;
import android.hardware.biometrics.BiometricPrompt.AuthenticationCallback;
import android.os.Build;
import android.os.CancellationSignal;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

public class CalendarModule extends ReactContextBaseJavaModule {

    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    //@ReactMethod(isBlockingSynchronousMethod = true)
    //not recommended for debugging

    @RequiresApi(api = Build.VERSION_CODES.P)
    @ReactMethod
    public void scanner(Callback callback) {
        new BiometricPrompt.Builder(getReactApplicationContext())
                .setTitle("title")
                .setSubtitle("subtitle")
                .setDescription("description")
                .setNegativeButton("negativeButtonText", getReactApplicationContext().getMainExecutor(), new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        // callback;
                    }
                })
                .build()
                .authenticate(
                        new CancellationSignal(),
                        getReactApplicationContext().getMainExecutor(),
                        new AuthenticationCallback() {
                            @Override
                            public void onAuthenticationError(int errorCode, CharSequence errString) {
                                super.onAuthenticationError(errorCode, errString);
                                showMessage((String) errString);
                            }

                            @Override
                            public void onAuthenticationSucceeded(BiometricPrompt.AuthenticationResult result) {
                                super.onAuthenticationSucceeded(result);
                                showMessage("Login Success");
                                callback.invoke();
                            }
                        });
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Promise promise) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod
    public void promiseEvent(String name, Promise promise) {
        try {
            String fullName = "super"+name;;
            promise.resolve(fullName);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }

    @ReactMethod
    public void callbackEvent(String name, Callback callback) {
        String fullName = "super"+name;
        callback.invoke(null, fullName);
    }

    @ReactMethod
    public void showMessage(String message) {
        Log.d("CalendarModule", "Message event called with message: " + message);
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }

}