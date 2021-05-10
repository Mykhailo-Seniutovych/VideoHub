# Possible Issues when debugging the project in Visual Studio
* SSL should be configured for ports 5000, 5001, 5002. You can reuse SSL bindings from other ports that have SSL enabled, check [how to confgure SSL on Windows](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-configure-a-port-with-an-ssl-certificate).
* When starting a debug session you might face the error _Docker debugging failed: Failed to create the certificate_. Check outh [this answer on github](https://github.com/microsoft/DockerTools/issues/99#issuecomment-457750862) that might help you.
* To debug the projects on Docker, and be able to access it from LAN, you must allow ports 5000, 5001, 5002 for inbound connections inside your Firewall
	* If you try to debug it in IIS Express on LAN, [make sure the site will be available on LAN](https://stackoverflow.com/a/42989832/7111692)

