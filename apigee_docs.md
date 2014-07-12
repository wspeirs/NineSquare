## 1. Import the SDK into your HTML

To enable support for Apigee-related functions in your HTML, you'll need to include apigee.js in your app. To do this, add the following to the head block of your HTML:

``<script type="text/javascript" src="path/to/js/sdk/apigee.js"></script>``

## 2. Instantiate Apigee.Client

Apigee.Client initializes the App Services SDK, and gives you access to all of the App Services SDK methods.

You will need to pass a JSON object with the UUID or name for your App Services organization and application when you instantiate it.

```
//Apigee account credentials, available in the App Services admin portal 
var client_creds = {
        orgName:'billspeirs',
        appName:'sandbox'
    }

//Initializes the SDK. Also instantiates Apigee.MonitoringClient
var dataClient = new Apigee.Client(client_creds);
```

## 3. Verify SDK installation
Once initialized, App Services will also automatically instantiate Apigee.MonitoringClient and begin logging usage, crash and error metrics for your app.

To verify that the SDK has been properly initialized, run your app, then go to 'Monitoring' > 'App Usage' in the App Services admin portal to verify that data is being sent.
