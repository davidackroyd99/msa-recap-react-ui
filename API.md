<https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-python>


To access Azure blob (container) storage my variable **MyStorageConnectionAppSetting** must be set.  Otherwise you'll see this error.

```
 System.Private.CoreLib: Exception while executing function: Functions.uploadTest. Microsoft.Azure.WebJobs.Host: Storage account connection string 'AzureWebJobsMyStorageConnectionAppSetting' does not exist. Make sure that it is a defined App Setting.
 ```

See <https://docs.microsoft.com/en-us/azure/static-web-apps/application-settings> for details.

Note that for the deployed app the value must be set in the Azure Portal, and for local testing set in ```local.settings.json```.
